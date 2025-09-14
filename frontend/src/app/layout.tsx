// app/layout.tsx
import './globals.css';
import { AuthProvider } from '@/context/AuthContext';
import Navbar from '@/components/navbar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mind Heaven',
  description: 'Mental health support platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-black antialiased" suppressHydrationWarning={true}>
        <AuthProvider>
          <Navbar />
          <main>{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
