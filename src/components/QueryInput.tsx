import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface QueryInputProps {
  onSubmit: (query: string) => void;
  isProcessing: boolean;
}

export function QueryInput({ onSubmit, isProcessing }: QueryInputProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim() && !isProcessing) {
      onSubmit(query.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter your SAP-related query..."
          className="w-full px-4 py-3 pr-12 text-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          disabled={isProcessing}
        />
        <button
          type="submit"
          disabled={isProcessing || !query.trim()}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-600 hover:text-blue-500 disabled:opacity-50 disabled:hover:text-gray-600"
        >
          <Search className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
}