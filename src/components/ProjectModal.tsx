import React, { useEffect } from 'react';

interface ProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    image: string;
    description: string;
    siteLink?: string;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
    isOpen,
    onClose,
    title,
    image,
    description,
    siteLink,
}) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            document.body.classList.add('modal-open');
        } else {
            document.body.style.overflow = '';
            document.body.classList.remove('modal-open');
        }
        return () => {
            document.body.style.overflow = '';
            document.body.classList.remove('modal-open');
        };
    }, [isOpen]);

    return (
        <>
            <style>{`
                body.modal-open iframe {
                    visibility: hidden !important;
                }
                body.modal-open > *:not(.modal-root) {
                    z-index: 0 !important;
                    position: relative !important;
                }
                body.modal-open *:not(.modal-root) {
                    z-index: 0 !important;
                }
            `}</style>
            <div
                className={`fixed inset-0 flex items-center justify-center transition-opacity duration-300 modal-root ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                style={{ transition: 'opacity 0.3s', zIndex: 2147483647, position: 'fixed' }}
            >
                <div
                    className="fixed inset-0 bg-black bg-opacity-80"
                    style={{ zIndex: 2147483646, position: 'fixed' }}
                ></div>
                <div
                    className={`relative w-full max-w-xs sm:max-w-md md:max-w-lg p-0 animate-modal-in ${isOpen ? 'scale-100' : 'scale-95'} transition-transform duration-300`}
                    style={{
                        maxWidth: '95vw',
                        maxHeight: '80vh',
                        overflowY: 'auto',
                        transition: 'transform 0.3s',
                        scrollbarColor: '#111 #222',
                        scrollbarWidth: 'thin',
                        zIndex: 2147483648,
                        position: 'relative',
                    }}
                >
                    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-2 border-red-500 shadow-2xl rounded-2xl p-3 sm:p-8 relative custom-scrollbar flex flex-col items-center pt-16">
                        <button
                            className="absolute top-3 right-3 text-white bg-red-600 hover:bg-red-700 rounded-full w-9 h-9 flex items-center justify-center text-2xl font-bold shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-400 cursor-pointer z-10"
                            onClick={onClose}
                            aria-label="Fechar"
                        >
                            &times;
                        </button>
                        <img
                            src={image}
                            alt={title}
                            className="w-full max-w-xs sm:max-w-sm md:max-w-md max-h-80 sm:max-h-96 object-contain mx-auto mb-6 rounded-xl shadow border-2 border-red-400"
                        />
                        <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 text-center text-red-500 tracking-wide animate-fade-in drop-shadow-lg">{title}</h2>
                        <p className="mb-6 text-center text-gray-200 animate-fade-in animation-delay-200 text-base sm:text-lg leading-relaxed px-2">{description}</p>
                        {siteLink && (
                            <a
                                href={siteLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-2 px-7 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-lg hover:from-red-700 hover:to-red-800 shadow-lg transition-all duration-300 text-base"
                            >
                                🔗 Acessar site
                            </a>
                        )}
                    </div>
                </div>
                <style>{`
                    .custom-scrollbar::-webkit-scrollbar {
                        width: 8px;
                    }
                    .custom-scrollbar::-webkit-scrollbar-thumb {
                        background: #111;
                        border-radius: 8px;
                    }
                    .custom-scrollbar::-webkit-scrollbar-track {
                        background: #222;
                    }
                `}</style>
            </div>
        </>
    );
};

export default ProjectModal;
