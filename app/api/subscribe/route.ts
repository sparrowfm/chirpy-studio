import { NextRequest, NextResponse } from 'next/server';
import { addSubscriber, subscriberExists } from '@/lib/dynamodb';
import { sendWelcomeEmail, sendSignupNotification } from '@/lib/ses';
import MailChecker from 'mailchecker';

// Simple in-memory rate limiting
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now - record.timestamp > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, { count: 1, timestamp: now });
    return false;
  }

  if (record.count >= MAX_REQUESTS) {
    return true;
  }

  record.count++;
  return false;
}

export async function POST(request: NextRequest) {
  try {
    // Get IP for rate limiting
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] ||
               request.headers.get('x-real-ip') ||
               'unknown';

    // Check rate limit
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { email } = body;

    // Validate email
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Check for disposable/temporary email addresses
    if (!MailChecker.isValid(email)) {
      return NextResponse.json(
        { error: 'Please use a permanent email address (no temporary/disposable emails)' },
        { status: 400 }
      );
    }

    // Normalize email
    const normalizedEmail = email.toLowerCase().trim();

    // Check if already subscribed
    const exists = await subscriberExists(normalizedEmail);
    if (exists) {
      return NextResponse.json(
        { message: "You're already on the list!" },
        { status: 200 }
      );
    }

    // Add subscriber
    await addSubscriber({
      email: normalizedEmail,
      subscribedAt: new Date().toISOString(),
      source: 'landing-page',
      ipAddress: ip !== 'unknown' ? ip : undefined,
    });

    // Send emails (don't fail if these fail)
    try {
      await Promise.all([
        sendWelcomeEmail(normalizedEmail),
        sendSignupNotification(normalizedEmail),
      ]);
    } catch (emailError) {
      console.error('Failed to send emails:', emailError);
      // Continue anyway - the subscription was successful
    }

    return NextResponse.json(
      { message: "You're on the list! Check your inbox." },
      { status: 200 }
    );
  } catch (error) {
    console.error('Subscribe error:', error);

    // Check for conditional check failed (duplicate)
    if (error instanceof Error && error.name === 'ConditionalCheckFailedException') {
      return NextResponse.json(
        { message: "You're already on the list!" },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
