import React from 'react';
import { ProductCard } from './ProductCard';
import { NEW_ARRIVALS } from '../constants';
import { Product } from '../types';

interface NewArrivalsPageProps {
  onViewDetails: (product: Product) => void;
}

export const NewArrivalsPage: React.FC<NewArrivalsPageProps> = ({ onViewDetails }) => {
  return (
    <div className="animate-fade-in">
      <div className="bg-surface pt-12 pb-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-text-primary">New Arrivals</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-text-secondary">
            Check out the latest and greatest in mobile technology. Fresh on the shelves, just for you.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {NEW_ARRIVALS.map((phone) => (
              <ProductCard key={phone.id} product={phone} onViewDetails={onViewDetails} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
