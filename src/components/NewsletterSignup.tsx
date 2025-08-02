import React, { useState } from 'react';

interface NewsletterSignupProps {
    variant?: 'inline' | 'modal' | 'footer';
    title?: string;
    description?: string;
}

const NewsletterSignup: React.FC<NewsletterSignupProps> = ({
    variant = 'inline',
    title = 'Fique por dentro das novidades',
    description = 'Receba dicas exclusivas sobre desenvolvimento web, tendências e ofertas especiais.'
}) => {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !email.includes('@')) {
            setError('Por favor, insira um email válido');
            return;
        }

        setIsLoading(true);
        setError('');

        try {
            // Simulação de envio - aqui você integraria com seu serviço de email
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Em produção, você faria algo como:
            // await fetch('/api/newsletter', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({ email })
            // });

            setIsSubscribed(true);
            setEmail('');
        } catch (err) {
            setError('Erro ao cadastrar. Tente novamente.');
        } finally {
            setIsLoading(false);
        }
    };

    const baseClasses = {
        inline: 'bg-gray-800/50 border border-gray-700/50 rounded-2xl p-6 md:p-8',
        modal: 'bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700/50',
        footer: 'bg-gray-900/30 border border-gray-700/30 rounded-xl p-4'
    };

    if (isSubscribed) {
        return (
            <div className={`${baseClasses[variant]} text-center`}>
                <div className="flex flex-col items-center space-y-4">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white">Obrigado!</h3>
                    <p className="text-gray-300">
                        Você foi cadastrado com sucesso em nossa newsletter.
                        Em breve receberá conteúdos exclusivos sobre desenvolvimento web!
                    </p>
                    <button
                        onClick={() => setIsSubscribed(false)}
                        className="text-red-400 hover:text-red-300 text-sm transition-colors duration-300"
                    >
                        Cadastrar outro email
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className={baseClasses[variant]}>
            <div className="flex flex-col md:flex-row items-center gap-6">
                {variant !== 'footer' && (
                    <div className="flex-1 text-center md:text-left">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                            {title}
                        </h3>
                        <p className="text-gray-300 text-sm md:text-base">
                            {description}
                        </p>
                    </div>
                )}

                <div className="flex-1 w-full max-w-md">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Seu melhor email"
                                className="flex-1 px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300"
                                disabled={isLoading}
                            />
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                            >
                                {isLoading ? (
                                    <div className="flex items-center justify-center">
                                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Enviando...
                                    </div>
                                ) : (
                                    'Cadastrar'
                                )}
                            </button>
                        </div>

                        {error && (
                            <p className="text-red-400 text-sm">{error}</p>
                        )}

                        <p className="text-xs text-gray-400">
                            📧 Sem spam. Você pode cancelar a qualquer momento.
                        </p>
                    </form>
                </div>
            </div>

            {/* Benefits */}
            {variant === 'inline' && (
                <div className="mt-6 pt-6 border-t border-gray-700/50">
                    <h4 className="text-sm font-semibold text-white mb-3">O que você vai receber:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex items-center text-sm text-gray-300">
                            <span className="text-green-400 mr-2">✓</span>
                            Dicas exclusivas de desenvolvimento web
                        </div>
                        <div className="flex items-center text-sm text-gray-300">
                            <span className="text-green-400 mr-2">✓</span>
                            Ofertas especiais e descontos
                        </div>
                        <div className="flex items-center text-sm text-gray-300">
                            <span className="text-green-400 mr-2">✓</span>
                            Tendências do mercado digital
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NewsletterSignup;
