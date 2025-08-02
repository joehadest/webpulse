import React from 'react';

interface SecurityBadgeProps {
    type?: 'ssl' | 'secure' | 'verified' | 'trusted';
    size?: 'sm' | 'md' | 'lg';
    showText?: boolean;
}

const SecurityBadge: React.FC<SecurityBadgeProps> = ({
    type = 'ssl',
    size = 'md',
    showText = true
}) => {
    const badges = {
        ssl: {
            title: 'SSL Seguro',
            description: 'Conexão criptografada',
            icon: '🔒',
            color: 'green'
        },
        secure: {
            title: 'Site Seguro',
            description: 'Protegido contra ameaças',
            icon: '🛡️',
            color: 'blue'
        },
        verified: {
            title: 'Empresa Verificada',
            description: 'Identidade confirmada',
            icon: '✅',
            color: 'purple'
        },
        trusted: {
            title: 'Confiável',
            description: 'Certificado de confiança',
            icon: '🏆',
            color: 'yellow'
        }
    };

    const sizeClasses = {
        sm: 'px-2 py-1 text-xs',
        md: 'px-3 py-2 text-sm',
        lg: 'px-4 py-3 text-base'
    };

    const badge = badges[type];

    return (
        <div className={`inline-flex items-center ${sizeClasses[size]} bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 rounded-lg hover:border-green-500/50 transition-all duration-300 group`}>
            <span className="text-lg mr-2 group-hover:scale-110 transition-transform duration-300">
                {badge.icon}
            </span>
            {showText && (
                <div className="flex flex-col">
                    <span className="font-semibold text-white leading-tight">
                        {badge.title}
                    </span>
                    <span className="text-gray-400 text-xs leading-tight">
                        {badge.description}
                    </span>
                </div>
            )}
        </div>
    );
};

// Componente para mostrar múltiplos badges de segurança
export const SecurityBadges: React.FC = () => {
    return (
        <div className="py-8 bg-gray-900/30">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-6">
                    <h3 className="text-lg font-semibold text-white mb-2">
                        Segurança e Confiabilidade
                    </h3>
                    <p className="text-gray-400 text-sm">
                        Certificações que garantem a segurança dos seus dados
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                    <SecurityBadge type="ssl" />
                    <SecurityBadge type="secure" />
                    <SecurityBadge type="verified" />
                    <SecurityBadge type="trusted" />
                </div>

                {/* Informações adicionais */}
                <div className="mt-6 text-center">
                    <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full">
                        <svg className="w-4 h-4 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-green-400 text-sm font-medium">
                            Certificado SSL Ativo - Dados protegidos com criptografia de 256 bits
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecurityBadge;
