import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
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
      <section className="bg-gradient-to-br from-blue-500 to-purple-600 text-white py-16">
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
  );
}
