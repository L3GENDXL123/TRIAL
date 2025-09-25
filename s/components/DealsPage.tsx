import React from 'react';
import { ProductCard } from './ProductCard';
import { DEALS_PHONES } from '../constants';
import { Product } from '../types';

interface DealsPageProps {
  onViewDetails: (product: Product) => void;
}

export const DealsPage: React.FC<DealsPageProps> = ({ onViewDetails }) => {
  return (
    <div className="animate-fade-in">
      <div className="bg-surface pt-12 pb-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-text-primary">Hot Deals</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-text-secondary">
            Don't miss out on these limited-time offers. Get the best tech for less.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {DEALS_PHONES.map((phone) => (
              <ProductCard key={phone.id} product={phone} onViewDetails={onViewDetails} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};