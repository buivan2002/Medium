
import type { Metadata } from "next";
import {  MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';

export const metadata: Metadata = {
  title: "NHÀ THUỐC",
  description: "MEDIUM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      </head>
      <body>
        <MantineProvider>
        {children}
        </MantineProvider>
      </body>
    </html>
  );
}
