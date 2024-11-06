import React from 'react';
import { QueryResult } from '../types/agents';

interface ResultsPanelProps {
  results: QueryResult[];
}

export function ResultsPanel({ results }: ResultsPanelProps) {
  if (results.length === 0) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-6">
      <h2 className="text-xl font-semibold mb-4">Consolidated Results</h2>
      <div className="space-y-4">
        {results.map((result, index) => (
          <div key={`${result.agentId}-${index}`} className="border-l-4 border-blue-500 pl-4">
            <p className="text-sm text-gray-600 mb-1">{result.agentId}</p>
            <p className="text-gray-800">{result.response}</p>
            <p className="text-xs text-gray-500 mt-1">
              {new Date(result.timestamp).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}