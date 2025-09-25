import React from 'react';
import { Product } from '../types';
import { XMarkIcon } from './icons/XMarkIcon';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

const CheckIcon: React.FC = () => (
    <svg className="h-5 w-5 text-secondary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
);


export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 animate-fade-in" onClick={onClose}>
      <div 
        className="bg-surface rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative animate-slide-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-text-secondary hover:text-text-primary z-10">
          <XMarkIcon className="h-8 w-8" />
        </button>

        <div className="grid md:grid-cols-2 gap-6 md:gap-12 p-6 md:p-10">
          <div className="flex items-center justify-center">
            <img src={product.imageUrl} alt={product.name} className="w-full h-auto max-h-[450px] object-cover rounded-xl" />
          </div>
          <div>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">{product.brand}</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary mt-2">{product.name}</h2>
            <p className="text-text-secondary mt-4">{product.description}</p>
            
            <div className="mt-6">
                <h4 className="text-lg font-semibold text-text-primary mb-3">Key Features:</h4>
                <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-3">
                            <CheckIcon />
                            <span className="text-text-secondary">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <span className="text-4xl font-bold text-text-primary">${product.price}</span>
              <button className="bg-secondary text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-emerald-500 transition-colors duration-300 shadow-lg shadow-secondary/20">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};