import type { Metadata } from 'next';
import './globals.css';
import DarkModeToggle from '@/components/DarkModeToggle';

const APP_NAME = 'Project Mercury';
const APP_DESCRIPTION = 'live chat service';

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <DarkModeToggle />
        <div>{children}</div>
      </body>
    </html>
  );
}
