import { LandingLayout } from "@/components/landing-layout";

export default function PrivacyPolicyPage() {
    return (
        <LandingLayout>
            <main className="flex-1">
                <div className="container mx-auto py-16 px-4 flex">
                    <aside className="w-1/4 pr-8">
                        <nav className="sticky top-16">
                            <h2 className="text-xl font-bold mb-4">Sumário</h2>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#coleta-de-dados" className="hover:underline">
                                        1. Coleta de Dados
                                    </a>
                                </li>
                                <li>
                                    <a href="#uso-dos-dados" className="hover:underline">
                                        2. Uso dos Dados
                                    </a>
                                </li>
                                <li>
                                    <a href="#compartilhamento-de-dados" className="hover:underline">
                                        3. Compartilhamento de Dados
                                    </a>
                                </li>
                                <li>
                                    <a href="#seguranca-de-dados" className="hover:underline">
                                        4. Segurança de Dados
                                    </a>
                                </li>
                                <li>
                                    <a href="#acesso-e-correcao-de-dados" className="hover:underline">
                                        5. Acesso e Correção de Dados
                                    </a>
                                </li>
                                <li>
                                    <a href="#armazenamento-de-dados" className="hover:underline">
                                        6. Armazenamento de Dados
                                    </a>
                                </li>
                                <li>
                                    <a href="#consentimento" className="hover:underline">
                                        7. Consentimento
                                    </a>
                                </li>
                                <li>
                                    <a href="#alteracoes-na-politica-de-privacidade" className="hover:underline">
                                        8. Alterações na Política de Privacidade
                                    </a>
                                </li>
                                <li>
                                    <a href="#contato" className="hover:underline">
                                        9. Contato
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </aside>
                    <div className="w-3/4">
                        <h1 className="text-5xl font-bold mb-8 text-center">
                            Política de Privacidade
                        </h1>
                        <p className="text-lg leading-relaxed mb-8">
                            O Gastei é um projeto open source sem fins lucrativos, dedicado a ajudar usuários a gerenciar suas finanças pessoais de forma eficiente e gratuita.
                        </p>
                        <div className="text-lg leading-relaxed space-y-6">
                            <h2 id="coleta-de-dados" className="text-2xl font-semibold">1. Coleta de Dados</h2>
                            <p>
                                O Gastei coleta as seguintes informações pessoais:
                            </p>
                            <ul className="list-disc list-inside">
                                <li>Nome de usuário;</li>
                                <li>Endereço de e-mail;</li>
                                <li>
                                    Dados financeiros, como entradas de despesas e receitas, ou outras informações que você optar por registrar no aplicativo.
                                </li>
                            </ul>

                            <h2 id="uso-dos-dados" className="text-2xl font-semibold">2. Uso dos Dados</h2>
                            <p>As informações que coletamos são usadas para:</p>
                            <ul className="list-disc list-inside">
                                <li>Permitir a operação do aplicativo e fornecer suas funcionalidades;</li>
                                <li>Melhorar o aplicativo e a experiência do usuário;</li>
                                <li>Comunicar-se com você sobre o uso do aplicativo, atualizações e novas funcionalidades;</li>
                                <li>Garantir a segurança do aplicativo e prevenir fraudes.</li>
                            </ul>

                            <h2 id="compartilhamento-de-dados" className="text-2xl font-semibold">3. Compartilhamento de Dados</h2>
                            <p>
                                O Gastei não compartilha suas informações pessoais com terceiros, exceto nos seguintes casos:
                            </p>
                            <ul className="list-disc list-inside">
                                <li>Quando necessário para cumprir a lei, regulamento ou ordem judicial;</li>
                                <li>Para proteger a segurança, direitos e propriedade do Gastei ou seus usuários.</li>
                            </ul>

                            <h2 id="seguranca-de-dados" className="text-2xl font-semibold">4. Segurança de Dados</h2>
                            <p>
                                O Gastei implementa medidas de segurança para proteger suas informações pessoais contra acessos não autorizados, divulgação ou destruição. No entanto, nenhum sistema é totalmente seguro e não podemos garantir a segurança absoluta das suas informações.
                            </p>

                            <h2 id="acesso-e-correcao-de-dados" className="text-2xl font-semibold">5. Acesso e Correção de Dados</h2>
                            <p>
                                Você tem o direito de acessar, corrigir ou excluir suas informações pessoais armazenadas no Gastei. Para isso, basta acessar sua conta ou entrar em contato conosco através dos canais de suporte indicados.
                            </p>

                            <h2 id="armazenamento-de-dados" className="text-2xl font-semibold">6. Armazenamento de Dados</h2>
                            <p>
                                Os dados coletados são armazenados em servidores seguros e mantidos pelo tempo necessário para fornecer o serviço ou conforme exigido por lei.
                            </p>

                            <h2 id="consentimento" className="text-2xl font-semibold">7. Consentimento</h2>
                            <p>
                                Ao utilizar o Gastei, você concorda com a coleta, uso e compartilhamento de suas informações conforme descrito nesta Política de Privacidade. Se não concordar, você deve cessar o uso do aplicativo.
                            </p>

                            <h2 id="alteracoes-na-politica-de-privacidade" className="text-2xl font-semibold">8. Alterações na Política de Privacidade</h2>
                            <p>
                                O Gastei pode atualizar esta Política de Privacidade periodicamente. Notificaremos você de quaisquer alterações substanciais através do aplicativo ou por e-mail.
                            </p>

                            <h2 id="contato" className="text-2xl font-semibold">9. Contato</h2>
                            <p>
                                Em caso de dúvidas sobre esta Política de Privacidade, entre em contato conosco através do e-mail:{" "}
                                <a href="mailto:gabrielmaia43@hotmail.com" className="text-blue-600 hover:underline">
                                    gabrielmaia43@hotmail.com
                                </a>.
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
