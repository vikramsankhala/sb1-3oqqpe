import React, { useState } from 'react';
import { AgentCard } from './components/AgentCard';
import { QueryInput } from './components/QueryInput';
import { ResultsPanel } from './components/ResultsPanel';
import { Agent, QueryResult, OrchestratorState } from './types/agents';
import { Brain } from 'lucide-react';

const initialAgents: Agent[] = [
  { id: 'wiki', name: 'SAP Wiki Agent', status: 'idle' },
  { id: 'sap-com', name: 'SAP.com Agent', status: 'idle' },
  { id: 'tech-docs', name: 'SAP Technical Docs Agent', status: 'idle' },
  { id: 'community', name: 'SAP Community Forums Agent', status: 'idle' },
  { id: 'partner', name: 'SAP Partner Network Agent', status: 'idle' },
  { id: 'support', name: 'SAP Customer Support Portal Agent', status: 'idle' },
];

function App() {
  const [state, setState] = useState<OrchestratorState>({
    query: '',
    results: [],
    activeAgents: initialAgents,
    isProcessing: false,
  });

  const handleQuerySubmit = async (query: string) => {
    setState(prev => ({
      ...prev,
      query,
      isProcessing: true,
      activeAgents: prev.activeAgents.map(agent => ({
        ...agent,
        status: 'processing',
        lastQuery: query,
      }))
    }));

    // Simulate agent processing
    setTimeout(() => {
      const mockResults: QueryResult[] = state.activeAgents.map(agent => ({
        agentId: agent.name,
        response: `Simulated response from ${agent.name} for query: ${query}`,
        timestamp: Date.now(),
      }));

      setState(prev => ({
        ...prev,
        results: mockResults,
        isProcessing: false,
        activeAgents: prev.activeAgents.map(agent => ({
          ...agent,
          status: 'completed',
          lastResponse: `Simulated response for ${query}`,
        }))
      }));
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Brain className="w-12 h-12 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">SAP Research Assistant</h1>
          <p className="text-gray-600">Multi-Agent System for Comprehensive SAP Information Retrieval</p>
        </div>

        <div className="flex justify-center mb-8">
          <QueryInput onSubmit={handleQuerySubmit} isProcessing={state.isProcessing} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {state.activeAgents.map(agent => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>

        <ResultsPanel results={state.results} />
      </div>
    </div>
  );
}

export default App;