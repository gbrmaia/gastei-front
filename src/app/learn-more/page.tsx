import { LandingLayout } from "@/components/landing-layout";

export default function AboutPage() {
    return (
        <LandingLayout>
            <main className="flex-1">
                <div className="container mx-auto py-16 px-4 flex">
                    <aside className="w-1/4 pr-8">
                        <nav className="sticky top-16">
                            <h2 className="text-xl font-bold mb-4">Sumário</h2>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#introducao" className="hover:underline">
                                        1. Introdução
                                    </a>
                                </li>
                                <li>
                                    <a href="#funcionalidades" className="hover:underline">
                                        2. Funcionalidades
                                    </a>
                                </li>
                                <li>
                                    <a href="#como-funciona" className="hover:underline">
                                        3. Como Funciona
                                    </a>
                                </li>
                                <li>
                                    <a href="#contribuir" className="hover:underline">
                                        4. Como Contribuir
                                    </a>
                                </li>
                                <li>
                                    <a href="#contato" className="hover:underline">
                                        5. Contato
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </aside>
                    <div className="w-3/4">
                        <h1 className="text-5xl font-bold mb-8 text-center">
                            Saiba Mais Sobre o Gastei
                        </h1>
                        <div className="text-lg leading-relaxed space-y-6">
                            <h2 id="introducao" className="text-2xl font-semibold">1. Introdução</h2>
                            <p>
                                O Gastei é um aplicativo open source sem fins lucrativos, criado para ajudar os usuários a gerenciar suas finanças pessoais de forma eficiente e gratuita. Nosso objetivo é fornecer uma ferramenta acessível que permita controlar despesas, receitas e manter um orçamento equilibrado.
                            </p>

                            <h2 id="funcionalidades" className="text-2xl font-semibold">2. Funcionalidades</h2>
                            <p>O Gastei oferece diversas funcionalidades para facilitar o gerenciamento financeiro:</p>
                            <ul className="list-disc list-inside">
                                <li>Registro de despesas e receitas;</li>
                                <li>Categorização de transações;</li>
                                <li>Relatórios e gráficos de gastos;</li>
                                <li>Definição de metas financeiras;</li>
                                <li>Importação e exportação de dados;</li>
                                <li>Sincronização em múltiplos dispositivos.</li>
                            </ul>

                            <h2 id="como-funciona" className="text-2xl font-semibold">3. Como Funciona</h2>
                            <p>
                                O Gastei é uma aplicação web que pode ser acessada através do seu navegador preferido. Após criar uma conta, você poderá começar a registrar suas transações financeiras, categorizá-las e acompanhar seu progresso através de relatórios detalhados.
                            </p>

                            <h2 id="contribuir" className="text-2xl font-semibold">4. Como Contribuir</h2>
                            <p>
                                Como um projeto open source, encorajamos a comunidade a contribuir para o desenvolvimento do Gastei. Você pode contribuir de várias formas:
                            </p>
                            <ul className="list-disc list-inside">
                                <li>Reportando bugs ou problemas;</li>
                                <li>Sugerindo novas funcionalidades;</li>
                                <li>Contribuindo com código no nosso repositório GitHub;</li>
                                <li>Divulgando o Gastei para amigos e familiares.</li>
                            </ul>
                            <p>
                                Visite nosso repositório no GitHub:{" "}
                                <a href="https://github.com/gbrmaia/gastei-front" className="text-blue-600 hover:underline">
                                    https://github.com/gbrmaia/gastei-front
                                </a>
                            </p>

                            <h2 id="contato" className="text-2xl font-semibold">5. Contato</h2>
                            <p>
                                Se você tiver dúvidas, sugestões ou precisar de suporte, entre em contato conosco:
                            </p>
                            <p>
                                E-mail:{" "}
                                <a href="mailto:gabrielmaia43@hotmail.com" className="text-blue-600 hover:underline">
                                    gabrielmaia43@hotmail.com
                                </a>
                            </p>
                            <p>
                                GitHub:{" "}
                                <a href="https://github.com/gbrmaia/gastei-front" className="text-blue-600 hover:underline">
                                    https://github.com/gbrmaia/gastei-front
                                </a>
                            </p>

                            <p className="text-sm text-muted-foreground">
                                Última atualização: 17/09/2024
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </LandingLayout>
    );
}
