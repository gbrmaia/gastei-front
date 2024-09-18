import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import "@/themes/globals.css";

import { ThemeProvider } from "@/providers/theme-provider";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { ShoppingBag } from "lucide-react";
import { LandingHeaderLayout } from "@/components/landing-layout";

export const metadata: Metadata = {
  title: "Gastei",
  description:
    "Controle suas finanças. Gastei é um aplicativo de controle financeiro pessoal que ajuda você a organizar suas finanças.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    url: "/",
    title: "Gastei",
    description:
      "Controle suas finanças. Gastei é um aplicativo de controle financeiro pessoal que ajuda você a organizar suas finanças.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Gastei",
    description:
      "Controle suas finanças. Gastei é um aplicativo de controle financeiro pessoal que ajuda você a organizar suas finanças.",
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={GeistSans.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
