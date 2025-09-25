
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-surface mt-20">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center text-center">
          <p className="text-text-secondary">
            &copy; {new Date().getFullYear()} Gemini Phones. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            This is a fictional website created for demonstration purposes.
          </p>
        </div>
      </div>
    </footer>
  );
};
