import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const TermsOfService: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            <Navbar />

            <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 mb-4">
                            Termos de Serviço
                        </h1>
                        <p className="text-gray-300">
                            Última atualização: 2 de agosto de 2025
                        </p>
                    </div>

                    {/* Content */}
                    <div className="glass rounded-2xl p-8 border border-gray-700/50 space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">1. Aceitação dos Termos</h2>
                            <div className="text-gray-300 space-y-4">
                                <p>
                                    Ao contratar os serviços da WebPulse, você concorda com estes termos e condições.
                                    Se você não concordar com qualquer parte destes termos, não utilize nossos serviços.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">2. Descrição dos Serviços</h2>
                            <div className="text-gray-300 space-y-4">
                                <p>A WebPulse oferece:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Desenvolvimento de sites institucionais</li>
                                    <li>Criação de lojas virtuais (e-commerce)</li>
                                    <li>Hospedagem de sites</li>
                                    <li>Manutenção e suporte técnico</li>
                                    <li>Otimização para motores de busca (SEO)</li>
                                    <li>Design responsivo</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">3. Planos de Assinatura</h2>
                            <div className="text-gray-300 space-y-4">
                                <p><strong>3.1 Plano WebPulse (R$ 120/mês ou R$ 1.200/ano):</strong></p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Site institucional responsivo</li>
                                    <li>Até 10 páginas</li>
                                    <li>Blog integrado</li>
                                    <li>Formulário de contato</li>
                                    <li>SEO básico</li>
                                    <li>Hospedagem e domínio inclusos</li>
                                    <li>Suporte por email</li>
                                </ul>

                                <p><strong>3.2 Cancelamento:</strong></p>
                                <p>
                                    O cancelamento pode ser solicitado a qualquer momento e será efetivo no final
                                    do período de cobrança atual.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">4. Pagamentos</h2>
                            <div className="text-gray-300 space-y-4">
                                <p><strong>4.1 Cobrança:</strong></p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Os pagamentos são processados via InfinitePay</li>
                                    <li>Cobrança mensal ou anual, conforme plano escolhido</li>
                                    <li>Renovação automática, salvo cancelamento</li>
                                </ul>

                                <p><strong>4.2 Atraso no Pagamento:</strong></p>
                                <p>
                                    Em caso de atraso superior a 7 dias, o site poderá ser suspenso até a regularização.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">5. Desenvolvimento e Prazos</h2>
                            <div className="text-gray-300 space-y-4">
                                <p><strong>5.1 Prazos de Entrega:</strong></p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Site básico: 5-7 dias úteis</li>
                                    <li>Site completo: 10-15 dias úteis</li>
                                    <li>E-commerce: 15-30 dias úteis</li>
                                </ul>

                                <p><strong>5.2 Revisões:</strong></p>
                                <p>
                                    Incluímos até 3 rodadas de revisões sem custo adicional.
                                    Alterações adicionais podem gerar custos extras.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">6. Propriedade Intelectual</h2>
                            <div className="text-gray-300 space-y-4">
                                <p><strong>6.1 Conteúdo do Cliente:</strong></p>
                                <p>
                                    O cliente mantém todos os direitos sobre textos, imagens e demais conteúdos fornecidos.
                                </p>

                                <p><strong>6.2 Código e Design:</strong></p>
                                <p>
                                    Em planos de assinatura, o código permanece propriedade da WebPulse.
                                    Em projetos personalizados, a propriedade é transferida após pagamento integral.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">7. Garantias e Responsabilidades</h2>
                            <div className="text-gray-300 space-y-4">
                                <p><strong>7.1 Garantia de Funcionamento:</strong></p>
                                <p>
                                    Garantimos 99,5% de uptime da hospedagem. Problemas serão corrigidos em até 24 horas.
                                </p>

                                <p><strong>7.2 Limitação de Responsabilidade:</strong></p>
                                <p>
                                    Nossa responsabilidade é limitada ao valor pago pelos serviços.
                                    Não nos responsabilizamos por danos indiretos ou lucros cessantes.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">8. Suporte Técnico</h2>
                            <div className="text-gray-300 space-y-4">
                                <p>Oferecemos:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Suporte por email em horário comercial</li>
                                    <li>Correção de bugs sem custo adicional</li>
                                    <li>Backup diário automático</li>
                                    <li>Atualizações de segurança</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">9. Suspensão e Rescisão</h2>
                            <div className="text-gray-300 space-y-4">
                                <p>Podemos suspender ou encerrar os serviços em caso de:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Não pagamento</li>
                                    <li>Violação destes termos</li>
                                    <li>Uso inadequado dos serviços</li>
                                    <li>Atividades ilegais</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">10. Alterações nos Termos</h2>
                            <div className="text-gray-300 space-y-4">
                                <p>
                                    Reservamo-nos o direito de alterar estes termos a qualquer momento.
                                    As alterações serão comunicadas com 30 dias de antecedência.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">11. Contato</h2>
                            <div className="text-gray-300 space-y-4">
                                <p>Para dúvidas sobre estes termos:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>WhatsApp: (84) 99869-9449</li>
                                    <li>Email: contato@webpulseservicos.com</li>
                                </ul>
                            </div>
                        </section>
                    </div>

                    {/* Navigation */}
                    <div className="mt-8 text-center">
                        <Link
                            to="/"
                            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-xl transition-all duration-300 transform hover:scale-105"
                        >
                            ← Voltar ao Início
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;
