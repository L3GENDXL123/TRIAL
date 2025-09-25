
import React, { useState } from 'react';
import { getPhoneRecommendations } from '../services/geminiService';
import { RecommendedPhone } from '../types';
import { SparklesIcon } from './icons/SparklesIcon';

const RecommendationCard: React.FC<{ phone: RecommendedPhone }> = ({ phone }) => (
    <div className="bg-surface/50 p-6 rounded-lg border border-gray-700 animate-slide-in-up">
        <h3 className="text-xl font-bold text-primary">{phone.brand} {phone.model}</h3>
        <p className="text-text-secondary mt-2 text-sm">{phone.reasoning}</p>
        <div className="mt-4">
            <h4 className="text-sm font-semibold text-text-primary mb-2">Key Features:</h4>
            <ul className="list-disc list-inside space-y-1 text-text-secondary text-sm">
                {phone.key_features.map((feature, i) => <li key={i}>{feature}</li>)}
            </ul>
        </div>
    </div>
);


export const PhoneRecommender: React.FC = () => {
    const [prompt, setPrompt] = useState('');
    const [recommendations, setRecommendations] = useState<RecommendedPhone[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!prompt.trim()) {
            setError('Please describe what you are looking for.');
            return;
        }
        setIsLoading(true);
        setError(null);
        setRecommendations([]);
        try {
            const result = await getPhoneRecommendations(prompt);
            setRecommendations(result);
        } catch (err: any) {
            setError(err.message || 'An unexpected error occurred.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="recommender" className="py-20 bg-background">
            <div className="container mx-auto px-6 text-center">
                <div className="max-w-3xl mx-auto">
                    <SparklesIcon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary">Find Your Perfect Phone</h2>
                    <p className="mt-4 text-lg text-text-secondary">
                        Describe what you need — from camera quality to gaming performance — and let our AI assistant find the best match for you.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="mt-10 max-w-2xl mx-auto">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <input
                            type="text"
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            placeholder="e.g., 'A phone with a great camera for under $800'"
                            className="w-full px-5 py-3 rounded-lg bg-surface text-text-primary border border-gray-600 focus:ring-2 focus:ring-primary focus:outline-none transition-shadow"
                            disabled={isLoading}
                        />
                        <button
                            type="submit"
                            className="bg-primary text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <>
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                 Finding...
                                </>
                            ) : "Recommend"}
                        </button>
                    </div>
                </form>

                <div className="mt-12 text-left">
                    {error && <p className="text-red-400 text-center">{error}</p>}
                    {recommendations.length > 0 && (
                        <div className="grid md:grid-cols-3 gap-6">
                            {recommendations.map((rec, index) => (
                                <RecommendationCard key={index} phone={rec} />
                            ))}
                        </div>
                    )}
                </div>

            </div>
        </section>
    );
};
