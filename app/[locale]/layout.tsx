import "./globals.css";
import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from '@/i18n/routing'
import Layout from "@/provider";
import { GlobalContext } from "@/context/Context";

const workSans = Work_Sans({
  variable: "--font-work-mono",
  subsets: ["latin"],
  weight: ['400', '600', '700']
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/marketplace-logo.svg" />
      </head>
      <body
        className={`${workSans.variable} antialiased`}
      >
        <NextIntlClientProvider >
          <GlobalContext>
            <Layout>
              {children}
            </Layout>
          </GlobalContext>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
