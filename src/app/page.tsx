import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { ArrowRightIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
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
            <Link href="/pricing" className="hover:underline">
              Preços
            </Link>
            <Link href="/support" className="hover:underline">
              Suporte
            </Link>
            <ModeToggle />
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <div className="container mx-auto py-16 px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Controle suas finanças com o Gastei
          </h1>
          <p className="text-xl mb-8">
            O melhor aplicativo para gerenciar seus gastos e economizar mais.
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="default" size="lg" asChild>
              <Link href="/dashboard">
                Comece Agora
                <ArrowRightIcon className="ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/learn-more">Saiba Mais</Link>
            </Button>
          </div>
          <img
            src="/images/gastei-app-screenshot.png"
            alt="Gastei App Screenshot"
            className="mt-12 w-full max-w-4xl mx-auto rounded shadow-lg"
          />
        </div>

        {/* Features Section */}
        <section className="bg-gray-50 dark:bg-gray-900 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Por que escolher o Gastei?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">Interface Intuitiva</h3>
                <p>
                  Design simples e fácil de usar para que você possa focar no que importa.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Relatórios Detalhados</h3>
                <p>
                  Acompanhe seus gastos com gráficos e insights personalizados.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Segurança Garantida</h3>
                <p>
                  Seus dados são criptografados e protegidos com a mais alta segurança.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Pronto para transformar sua vida financeira?
            </h2>
            <Button variant="default" size="lg" asChild>
              <Link href="/signup">
                Comece Agora
                <ArrowRightIcon className="ml-2" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-6 border-t border-border/40">
        <div className="container mx-auto flex flex-col items-center justify-between md:flex-row">
          <p className="text-sm text-muted-foreground">&copy; 2023 Gastei. Todos os direitos reservados.</p>
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
  );
}
