import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetails }) => {
  const isDeal = product.originalPrice && product.originalPrice > product.price;

  return (
    <div 
      className="bg-surface rounded-xl overflow-hidden shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:-translate-y-2 group flex flex-col"
      onClick={() => onViewDetails(product)}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => e.key === 'Enter' && onViewDetails(product)}
    >
      <div className="relative h-64 overflow-hidden">
        <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out" />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
        {isDeal && (
          <div className="absolute top-4 right-4 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Sale
          </div>
        )}
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-text-primary">{product.name}</h3>
        <p className="text-sm text-text-secondary mt-1">{product.brand}</p>
        <div className="flex-grow"></div>
        <div className="mt-4 flex justify-between items-center">
          <div className="flex items-baseline gap-2">
            <span className={`text-2xl font-extrabold ${isDeal ? 'text-secondary' : 'text-text-primary'}`}>${product.price}</span>
            {isDeal && <span className="text-lg line-through text-text-secondary">${product.originalPrice}</span>}
          </div>
          <button className="bg-primary text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-blue-700 transition-colors duration-300 transform group-hover:scale-105">
            View
          </button>
        </div>
      </div>
    </div>
  );
};