import React from 'react';

interface LoadingSpinnerProps {
    size?: 'sm' | 'md' | 'lg' | 'xl';
    color?: 'red' | 'blue' | 'green' | 'white';
    text?: string;
    fullScreen?: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
    size = 'md',
    color = 'red',
    text,
    fullScreen = false
}) => {
    const sizeClasses = {
        sm: 'w-4 h-4',
        md: 'w-8 h-8',
        lg: 'w-12 h-12',
        xl: 'w-16 h-16'
    };

    const colorClasses = {
        red: 'border-red-500',
        blue: 'border-blue-500',
        green: 'border-green-500',
        white: 'border-white'
    };

    const spinner = (
        <div className="flex flex-col items-center justify-center space-y-4">
            {/* Logo animado */}
            <div className="relative">
                <div className={`${sizeClasses[size]} border-4 ${colorClasses[color]} border-t-transparent rounded-full animate-spin`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-xs font-bold text-red-500">W</div>
                </div>
            </div>

            {/* Pulso de loading */}
            <div className="flex space-x-1">
                <div className={`w-2 h-2 bg-${color}-500 rounded-full animate-bounce`} style={{ animationDelay: '0ms' }}></div>
                <div className={`w-2 h-2 bg-${color}-500 rounded-full animate-bounce`} style={{ animationDelay: '150ms' }}></div>
                <div className={`w-2 h-2 bg-${color}-500 rounded-full animate-bounce`} style={{ animationDelay: '300ms' }}></div>
            </div>

            {text && (
                <p className="text-gray-300 text-sm animate-pulse">{text}</p>
            )}
        </div>
    );

    if (fullScreen) {
        return (
            <div className="fixed inset-0 bg-gray-900/90 backdrop-blur-sm flex items-center justify-center z-50">
                <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700/50 shadow-2xl">
                    {spinner}
                </div>
            </div>
        );
    }

    return spinner;
};

// Componente para skeleton loading de cards
export const CardSkeleton: React.FC = () => {
    return (
        <div className="glass rounded-2xl p-6 border border-gray-700/50 animate-pulse">
            <div className="space-y-4">
                <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                <div className="h-4 bg-gray-700 rounded w-1/2"></div>
                <div className="h-32 bg-gray-700 rounded"></div>
                <div className="space-y-2">
                    <div className="h-3 bg-gray-700 rounded"></div>
                    <div className="h-3 bg-gray-700 rounded w-5/6"></div>
                    <div className="h-3 bg-gray-700 rounded w-4/6"></div>
                </div>
            </div>
        </div>
    );
};

// Componente para loading de página
export const PageSkeleton: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header skeleton */}
                <div className="text-center mb-12 animate-pulse">
                    <div className="h-12 bg-gray-700 rounded w-1/2 mx-auto mb-4"></div>
                    <div className="h-6 bg-gray-700 rounded w-3/4 mx-auto"></div>
                </div>

                {/* Content skeleton */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[...Array(6)].map((_, index) => (
                        <CardSkeleton key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

// Hook personalizado para loading states
export const useLoading = (initialState: boolean = false) => {
    const [isLoading, setIsLoading] = React.useState(initialState);

    const startLoading = () => setIsLoading(true);
    const stopLoading = () => setIsLoading(false);

    return {
        isLoading,
        startLoading,
        stopLoading,
        setLoading: setIsLoading
    };
};

export default LoadingSpinner;
