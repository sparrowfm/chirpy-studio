'use client';

import { PasswordGate } from '@/components/PasswordGate';
import { ReactNode } from 'react';

export default function MCPDocsLayout({ children }: { children: ReactNode }) {
  return <PasswordGate>{children}</PasswordGate>;
}
