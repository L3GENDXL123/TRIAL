import React from 'react';
import { ProductCard } from './ProductCard';
import { MOCK_PHONES } from '../constants';
import { Product } from '../types';
import { PhoneRecommender } from './PhoneRecommender';

const Hero: React.FC = () => (
    <div className="relative text-white text-center py-20 md:py-32 bg-background overflow-hidden animate-fade-in">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 opacity-30"></div>
        <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-96 h-96 bg-primary/50 rounded-full filter blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-96 h-96 bg-secondary/50 rounded-full filter blur-3xl opacity-50"></div>
        
        <div className="container mx-auto px-6 relative z-10 animate-slide-in-up">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">The Future in Your Pocket</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-text-secondary">
                Discover the latest in mobile technology. Cutting-edge performance, stunning design, and AI-powered features await.
            </p>
            <div className="mt-8 flex justify-center gap-4">
                <a href="#featured" className="bg-primary text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
                    Explore Models
                </a>
            </div>
        </div>
    </div>
);


interface HomePageProps {
    onViewDetails: (product: Product) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onViewDetails }) => {
    return (
        <>
            <Hero />
            <section id="featured" className="py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-center text-text-primary mb-12">
                        Featured Smartphones
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {MOCK_PHONES.map((phone) => (
                            <ProductCard key={phone.id} product={phone} onViewDetails={onViewDetails} />
                        ))}
                    </div>
                </div>
            </section>
            <PhoneRecommender />
        </>
    );
}
