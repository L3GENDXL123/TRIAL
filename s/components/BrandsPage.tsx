import React, { useState, useMemo } from 'react';
import { ProductCard } from './ProductCard';
import { BRANDS, MOCK_PHONES } from '../constants';
import { Product } from '../types';

interface BrandsPageProps {
  onViewDetails: (product: Product) => void;
}

const BrandLogo: React.FC<{ brand: string }> = ({ brand }) => {
    // In a real app, you'd have actual logo assets.
    // Here, we'll just use text with some styling.
    const logos: { [key: string]: string } = {
        'Google': 'G',
        'Samsung': 'S',
        'Apple': 'A',
        'Nova': 'N',
        'All': 'All',
    }
    return (
        <div className="w-12 h-12 flex items-center justify-center bg-surface rounded-full text-xl font-bold">
            {logos[brand] || brand.charAt(0)}
        </div>
    )
}

export const BrandsPage: React.FC<BrandsPageProps> = ({ onViewDetails }) => {
    const [selectedBrand, setSelectedBrand] = useState('All');

    const filteredPhones = useMemo(() => {
        if (selectedBrand === 'All') {
            return MOCK_PHONES;
        }
        return MOCK_PHONES.filter(phone => phone.brand === selectedBrand);
    }, [selectedBrand]);

  return (
    <div className="animate-fade-in">
      <div className="bg-surface pt-12 pb-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-text-primary">Shop by Brand</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-text-secondary">
            Find phones from the brands you know and love.
          </p>
        </div>
      </div>

      <div className="sticky top-[72px] bg-background/80 backdrop-blur-sm z-30 py-4 mb-12">
        <div className="container mx-auto px-6">
            <div className="flex justify-center items-center gap-4 md:gap-8">
                {BRANDS.map(brand => (
                    <button 
                        key={brand} 
                        onClick={() => setSelectedBrand(brand)}
                        className={`flex flex-col items-center gap-2 text-text-secondary hover:text-text-primary transition-all duration-300 ${selectedBrand === brand ? 'text-primary' : ''}`}
                        aria-pressed={selectedBrand === brand}
                    >
                        <div className={`p-1 rounded-full transition-all duration-300 ${selectedBrand === brand ? 'bg-primary' : 'bg-transparent'}`}>
                           <BrandLogo brand={brand} />
                        </div>
                        <span className="text-sm font-semibold">{brand}</span>
                    </button>
                ))}
            </div>
        </div>
      </div>

      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPhones.map((phone) => (
              <ProductCard key={phone.id} product={phone} onViewDetails={onViewDetails} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
