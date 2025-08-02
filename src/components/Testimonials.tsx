import React, { useState, useEffect } from 'react';

interface Testimonial {
    id: number;
    name: string;
    company: string;
    role: string;
    content: string;
    avatar: string;
    rating: number;
    project: string;
    date: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Cliente Satisfeito",
        company: "Empresa de Soluções",
        role: "Diretor",
        content: "A WebPulse transformou completamente nossa presença digital. O site ficou moderno, responsivo e trouxe muito mais clientes para nossa empresa. Recomendo para qualquer negócio que queira crescer online.",
        avatar: "👨‍💼",
        rating: 5,
        project: "Site Institucional",
        date: "Janeiro 2024"
    },
    {
        id: 2,
        name: "Empreendedor",
        company: "Restaurante Local",
        role: "Proprietário",
        content: "O cardápio digital criado pela WebPulse revolucionou nosso atendimento. Agora os clientes fazem pedidos de forma prática e nosso faturamento aumentou 40%. Excelente trabalho!",
        avatar: "👨‍🍳",
        rating: 5,
        project: "Cardápio Digital",
        date: "Dezembro 2023"
    },
    {
        id: 3,
        name: "Gestor de Negócios",
        company: "Lanchonete",
        role: "Gerente",
        content: "O sistema de pedidos online está funcionando perfeitamente. A interface é intuitiva e nossos clientes adoraram a praticidade. A equipe da WebPulse é muito profissional e atenciosa.",
        avatar: "👨",
        rating: 5,
        project: "Sistema de Pedidos",
        date: "Novembro 2023"
    }
];

const Testimonials: React.FC = () => {
    const [visibleTestimonials, setVisibleTestimonials] = useState<number[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = parseInt(entry.target.getAttribute('data-id') || '0');
                        setVisibleTestimonials(prev => [...prev, id]);
                    }
                });
            },
            { threshold: 0.3 }
        );

        const elements = document.querySelectorAll('[data-testimonial]');
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, index) => (
            <svg
                key={index}
                className={`w-4 h-4 ${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                viewBox="0 0 20 20"
            >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ));
    };

    return (
        <section className="py-16 bg-gray-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 mb-4">
                        O que nossos clientes dizem
                    </h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
                        Confira os depoimentos de quem já transformou seu negócio com a WebPulse
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto mb-12">
                        <div className="text-center">
                            <div className="text-2xl sm:text-3xl font-bold text-red-500 mb-1">100%</div>
                            <div className="text-sm text-gray-400">Satisfação dos Clientes</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl sm:text-3xl font-bold text-red-500 mb-1">3+</div>
                            <div className="text-sm text-gray-400">Projetos Entregues</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl sm:text-3xl font-bold text-red-500 mb-1">2h</div>
                            <div className="text-sm text-gray-400">Tempo de Resposta</div>
                        </div>
                    </div>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.id}
                            data-id={testimonial.id}
                            data-testimonial
                            className={`glass rounded-2xl p-6 border border-gray-700/50 hover:border-red-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10 ${visibleTestimonials.includes(testimonial.id)
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-8'
                                }`}
                            style={{
                                transitionDelay: `${index * 150}ms`,
                                animationDelay: `${index * 150}ms`
                            }}
                        >
                            {/* Header */}
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center">
                                    <div className="text-3xl mr-4 animate-pulse">
                                        {testimonial.avatar}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-white">
                                            {testimonial.name}
                                        </h3>
                                        <p className="text-red-400 text-sm">
                                            {testimonial.role} - {testimonial.company}
                                        </p>
                                        <div className="flex items-center mt-1">
                                            {renderStars(testimonial.rating)}
                                        </div>
                                    </div>
                                </div>
                                <div className="text-xs text-gray-500">
                                    {testimonial.date}
                                </div>
                            </div>

                            {/* Content */}
                            <blockquote className="text-gray-300 leading-relaxed mb-4 italic relative">
                                <span className="text-red-400 text-2xl absolute -top-2 -left-1">"</span>
                                <span className="pl-6">{testimonial.content}</span>
                                <span className="text-red-400 text-2xl">"</span>
                            </blockquote>

                            {/* Project Tag & Rating */}
                            <div className="flex justify-between items-center">
                                <span className="inline-flex items-center bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-sm">
                                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    {testimonial.project}
                                </span>
                                <div className="flex items-center text-yellow-400 text-sm font-medium">
                                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    {testimonial.rating}.0
                                </div>
                            </div>

                            {/* Verificação Badge */}
                            <div className="mt-4 pt-4 border-t border-gray-700/50">
                                <div className="flex items-center justify-center text-xs text-green-400">
                                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    Cliente Verificado
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16">
                    <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Quer fazer parte dos nossos casos de sucesso?
                        </h3>
                        <p className="text-gray-300 mb-6 max-w-md mx-auto">
                            Junte-se aos nossos clientes satisfeitos e transforme seu negócio com soluções digitais profissionais.
                        </p>
                        <button
                            onClick={() => {
                                const msg = "Olá! Vi os depoimentos no site e gostaria de saber mais sobre os serviços da WebPulse.";
                                window.open(`https://wa.me/5584998699449?text=${encodeURIComponent(msg)}`, '_blank');
                            }}
                            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/25 group"
                        >
                            <svg className="w-5 h-5 mr-2 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.687" />
                            </svg>
                            Solicitar Orçamento Gratuito
                            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
