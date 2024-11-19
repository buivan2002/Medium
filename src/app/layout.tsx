
import type { Metadata } from "next";
import "./globals.css";
import { ColorSchemeScript, MantineProvider } from '@mantine/core';


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
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
        {children}
        </MantineProvider>
      </body>
    </html>
  );
}
