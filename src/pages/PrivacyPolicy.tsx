import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            <Navbar />

            <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 mb-4">
                            Política de Privacidade
                        </h1>
                        <p className="text-gray-300">
                            Última atualização: 2 de agosto de 2025
                        </p>
                    </div>

                    {/* Content */}
                    <div className="glass rounded-2xl p-8 border border-gray-700/50 space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">1. Informações que Coletamos</h2>
                            <div className="text-gray-300 space-y-4">
                                <p>
                                    A WebPulse coleta informações que você nos fornece diretamente quando:
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Preenche formulários de contato ou orçamento</li>
                                    <li>Se inscreve em nossa newsletter</li>
                                    <li>Entre em contato conosco via WhatsApp ou email</li>
                                    <li>Contrata nossos serviços</li>
                                </ul>
                                <p>
                                    Essas informações podem incluir: nome, email, telefone, empresa e detalhes do projeto.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">2. Como Usamos suas Informações</h2>
                            <div className="text-gray-300 space-y-4">
                                <p>Utilizamos suas informações para:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Responder às suas solicitações e fornecer suporte</li>
                                    <li>Processar contratos e pagamentos</li>
                                    <li>Enviar atualizações sobre projetos</li>
                                    <li>Melhorar nossos serviços</li>
                                    <li>Cumprir obrigações legais</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">3. Compartilhamento de Informações</h2>
                            <div className="text-gray-300 space-y-4">
                                <p>
                                    Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros,
                                    exceto quando necessário para:
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Processar pagamentos (InfinitePay)</li>
                                    <li>Enviar emails (EmailJS)</li>
                                    <li>Cumprir obrigações legais</li>
                                    <li>Proteger nossos direitos</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">4. Segurança dos Dados</h2>
                            <div className="text-gray-300 space-y-4">
                                <p>
                                    Implementamos medidas de segurança técnicas e organizacionais para proteger
                                    suas informações contra acesso não autorizado, alteração, divulgação ou destruição.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">5. Cookies e Tecnologias Similares</h2>
                            <div className="text-gray-300 space-y-4">
                                <p>
                                    Utilizamos cookies e tecnologias similares para:
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Melhorar a experiência de navegação</li>
                                    <li>Analisar o tráfego do site</li>
                                    <li>Personalizar conteúdo</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">6. Seus Direitos</h2>
                            <div className="text-gray-300 space-y-4">
                                <p>Você tem o direito de:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Acessar suas informações pessoais</li>
                                    <li>Corrigir dados incorretos</li>
                                    <li>Solicitar a exclusão de suas informações</li>
                                    <li>Portabilidade dos dados</li>
                                    <li>Retirar o consentimento</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">7. Contato</h2>
                            <div className="text-gray-300 space-y-4">
                                <p>
                                    Para exercer seus direitos ou esclarecer dúvidas sobre esta política,
                                    entre em contato conosco:
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>WhatsApp: (84) 99869-9449</li>
                                    <li>Email: contato@webpulseservicos.com</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">8. Alterações nesta Política</h2>
                            <div className="text-gray-300 space-y-4">
                                <p>
                                    Podemos atualizar esta política periodicamente. As alterações serão
                                    comunicadas através do nosso site com a data da última atualização.
                                </p>
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

export default PrivacyPolicy;
