import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { Product } from './types';
import { HomePage } from './components/HomePage';
import { NewArrivalsPage } from './components/NewArrivalsPage';
import { DealsPage } from './components/DealsPage';
import { BrandsPage } from './components/BrandsPage';


const App: React.FC = () => {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [currentPage, setCurrentPage] = useState('home');

    const handleViewDetails = (product: Product) => {
        setSelectedProduct(product);
    };

    const handleCloseModal = () => {
        setSelectedProduct(null);
    };

    const navigate = (page: string) => {
        setCurrentPage(page);
        window.scrollTo(0, 0);
    }

    return (
        <div className="bg-background min-h-screen font-sans text-text-primary">
            <Header onNavigate={navigate} />
            <main>
                {currentPage === 'home' && <HomePage onViewDetails={handleViewDetails} />}
                {currentPage === 'new-arrivals' && <NewArrivalsPage onViewDetails={handleViewDetails} />}
                {currentPage === 'deals' && <DealsPage onViewDetails={handleViewDetails} />}
                {currentPage === 'brands' && <BrandsPage onViewDetails={handleViewDetails} />}
            </main>
            <Footer />
            <ProductModal product={selectedProduct} onClose={handleCloseModal} />
        </div>
    );
};

export default App;
