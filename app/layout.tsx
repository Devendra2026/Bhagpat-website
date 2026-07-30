import { ClerkProvider } from '@clerk/nextjs';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import QueryProvider from '@/components/providers/query-providers';

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'AMINAGAR SARAI , BAGHPAT ',
  description:
    'Official portal of  Town Panchayat , Aminagar Sarai ,Baghpat, Uttar Pradesh. Settle property tax, pay water tax, apply for birth/death certificates, browse active tenders, and submit grievances online.',
  keywords:
    'Town Panchayat , Aminagar Sarai , Baghpat UP, Tax Payment Baghpat, Grievance Registration Baghpat',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning className={cn('font-sans', geist.variable)}>
        <body className="min-h-screen flex flex-col bg-white text-slate-800">
          <QueryProvider>{children}</QueryProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
