import { NextResponse } from 'next/server';

const WREN_API_URL = 'https://studio.chirpy.studio';

interface RouteParams {
  params: Promise<{ id: string }>;
}

/**
 * Clean SSML tags from script for display as transcript
 */
function cleanScript(script: string): string {
  return script
    // Remove SSML break tags
    .replace(/<break[^>]*\/>/g, '')
    // Remove any other SSML tags
    .replace(/<[^>]+>/g, '')
    // Clean up extra whitespace
    .replace(/\s+/g, ' ')
    .trim();
}

export async function GET(request: Request, { params }: RouteParams) {
  const { id } = await params;
  const apiKey = process.env.AVIARY_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: 'API key not configured' },
      { status: 500 }
    );
  }

  try {
    // Fetch episode by ID from Wren API
    const response = await fetch(`${WREN_API_URL}/api/episodes/${id}`, {
      headers: {
        'X-API-Key': apiKey,
        'Content-Type': 'application/json',
      },
      next: { revalidate: 300 }, // Cache for 5 minutes
    });

    if (!response.ok) {
      if (response.status === 404) {
        return NextResponse.json(
          { error: 'Episode not found' },
          { status: 404 }
        );
      }
      throw new Error(`Wren API error: ${response.status}`);
    }

    const data = await response.json();
    const episode = data.episode || data;

    // Return only the fields needed for transcript
    return NextResponse.json({
      id: episode.id,
      title: episode.title,
      transcript: episode.script ? cleanScript(episode.script) : null,
    });
  } catch (error) {
    console.error('Failed to fetch episode:', error);
    return NextResponse.json(
      { error: 'Failed to fetch episode' },
      { status: 500 }
    );
  }
}
