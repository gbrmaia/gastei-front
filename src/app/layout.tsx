import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import "./globals.css";

import { ThemeProvider } from "@/providers/theme-provider";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { ShoppingBag } from "lucide-react";

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
          <div className="flex flex-col min-h-screen">
            <header className="z-50 sticky top-0 w-full bg-white/95 border-b backdrop-blur-sm dark:bg-black/60 border-border/40">
              <div className="container mx-auto h-14 flex items-center">
                <Link
                  href="/"
                  className="flex items-center hover:opacity-85 transition-opacity duration-300"
                >
                  <ShoppingBag className="w-6 h-6 mr-3" />
                  <span className="font-bold text-xl">Gastei</span>
                </Link>
                <nav className="ml-auto flex items-center gap-4">
                  <Link href="/features" className="hover:underline">
                    Recursos
                  </Link>
                  <Link href="/support" className="hover:underline">
                    Suporte
                  </Link>
                  <Link href="https://github.com/gbrmaia/gastei-front" target="_blank" rel="noopener noreferrer">
                    <GitHubLogoIcon className="h-5 w-5" />
                  </Link>
                  <ModeToggle />
                </nav>
              </div>
            </header>
            {children}
            <footer className="py-6 border-t border-border/40">
              <div className="container mx-auto flex flex-col items-center justify-evenly md:flex-row">
                <p className="text-sm text-muted-foreground">&copy; 2024 Gastei. Todos os direitos reservados.</p>
                <nav className="flex space-x-4 mt-4 md:mt-0">
                  <Link href="/privacy" className="text-sm hover:underline">
                    Privacidade
                  </Link>
                  <Link href="/terms" className="text-sm hover:underline">
                    Termos de Uso
                  </Link>
                  <Link href="https://github.com/gbrmaia/gastei-front" target="_blank" rel="noopener noreferrer">
                    <GitHubLogoIcon className="h-5 w-5" />
                  </Link>
                </nav>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
