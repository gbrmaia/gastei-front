import { LandingLayout } from "@/components/landing-layout";

export default function TermsOfUsePage() {
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
                                    <a href="#aceitacao-dos-termos" className="hover:underline">
                                        2. Aceitação dos Termos
                                    </a>
                                </li>
                                <li>
                                    <a href="#uso-do-aplicativo" className="hover:underline">
                                        3. Uso do Aplicativo
                                    </a>
                                </li>
                                <li>
                                    <a href="#direitos-de-propriedade" className="hover:underline">
                                        4. Direitos de Propriedade
                                    </a>
                                </li>
                                <li>
                                    <a href="#licenca-de-uso" className="hover:underline">
                                        5. Licença de Uso
                                    </a>
                                </li>
                                <li>
                                    <a href="#responsabilidades-do-usuario" className="hover:underline">
                                        6. Responsabilidades do Usuário
                                    </a>
                                </li>
                                <li>
                                    <a href="#isencao-de-responsabilidade" className="hover:underline">
                                        7. Isenção de Responsabilidade
                                    </a>
                                </li>
                                <li>
                                    <a href="#alteracoes-nos-termos" className="hover:underline">
                                        8. Alterações nos Termos
                                    </a>
                                </li>
                                <li>
                                    <a href="#lei-aplicavel" className="hover:underline">
                                        9. Lei Aplicável
                                    </a>
                                </li>
                                <li>
                                    <a href="#contato" className="hover:underline">
                                        10. Contato
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </aside>
                    <div className="w-3/4">
                        <h1 className="text-5xl font-bold mb-8 text-center">
                            Termos de Uso
                        </h1>
                        <p className="text-lg leading-relaxed mb-8">
                            O Gastei é um projeto open source sem fins lucrativos, dedicado a ajudar usuários a gerenciar suas finanças pessoais de forma eficiente e gratuita.
                        </p>
                        <div className="text-lg leading-relaxed space-y-6">
                            <h2 id="introducao" className="text-2xl font-semibold">1. Introdução</h2>
                            <p>
                                Estes Termos de Uso regulamentam o acesso e uso do aplicativo Gastei. Ao utilizar o aplicativo, você concorda em cumprir estes termos.
                            </p>

                            <h2 id="aceitacao-dos-termos" className="text-2xl font-semibold">2. Aceitação dos Termos</h2>
                            <p>
                                Ao acessar e utilizar o Gastei, você concorda em se comprometer com os Termos de Uso aqui estabelecidos. Se não concordar com estes termos, por favor, não utilize o aplicativo.
                            </p>

                            <h2 id="uso-do-aplicativo" className="text-2xl font-semibold">3. Uso do Aplicativo</h2>
                            <p>
                                O Gastei fornece ferramentas para gerenciar suas finanças pessoais. O uso é destinado apenas para fins pessoais e não comerciais. Você concorda em utilizar o aplicativo de acordo com as leis e regulamentos aplicáveis.
                            </p>

                            <h2 id="direitos-de-propriedade" className="text-2xl font-semibold">4. Direitos de Propriedade</h2>
                            <p>
                                O Gastei é um projeto open source sob a licença MIT. Todo o código-fonte está disponível publicamente, e você é livre para usar, copiar, modificar e distribuir o software de acordo com os termos da licença.
                            </p>

                            <h2 id="licenca-de-uso" className="text-2xl font-semibold">5. Licença de Uso</h2>
                            <p>
                                Concedemos a você uma licença limitada, não exclusiva e intransferível para usar o aplicativo de acordo com estes Termos de Uso.
                            </p>

                            <h2 id="responsabilidades-do-usuario" className="text-2xl font-semibold">6. Responsabilidades do Usuário</h2>
                            <p>
                                Você é responsável por manter a confidencialidade das credenciais de sua conta e por todas as atividades que ocorram sob sua conta. Você concorda em notificar imediatamente sobre qualquer uso não autorizado de sua conta.
                            </p>

                            <h2 id="isencao-de-responsabilidade" className="text-2xl font-semibold">7. Isenção de Responsabilidade</h2>
                            <p>
                                O Gastei é fornecido "como está", sem garantias de qualquer tipo. Não nos responsabilizamos por quaisquer danos diretos, indiretos, incidentais ou consequenciais resultantes do uso ou incapacidade de uso do aplicativo.
                            </p>

                            <h2 id="alteracoes-nos-termos" className="text-2xl font-semibold">8. Alterações nos Termos</h2>
                            <p>
                                Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. Quaisquer alterações serão notificadas através do aplicativo ou por e-mail. O uso continuado do aplicativo após tais alterações constitui sua concordância com os novos termos.
                            </p>

                            <h2 id="lei-aplicavel" className="text-2xl font-semibold">9. Lei Aplicável</h2>
                            <p>
                                Estes Termos de Uso são regidos pelas leis do Brasil. Qualquer disputa decorrente destes termos será submetida à jurisdição exclusiva dos tribunais brasileiros.
                            </p>

                            <h2 id="contato" className="text-2xl font-semibold">10. Contato</h2>
                            <p>
                                Se tiver alguma dúvida sobre estes Termos de Uso, entre em contato conosco através do e-mail:{" "}
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
