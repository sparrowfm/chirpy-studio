'use client';

import { PasswordGate } from '@/components/PasswordGate';
import { ReactNode } from 'react';

export default function APIDocsLayout({ children }: { children: ReactNode }) {
  return <PasswordGate>{children}</PasswordGate>;
}
