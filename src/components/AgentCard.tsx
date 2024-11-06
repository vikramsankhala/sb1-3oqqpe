import React from 'react';
import { Activity, CheckCircle, XCircle, Clock } from 'lucide-react';
import { Agent } from '../types/agents';

interface AgentCardProps {
  agent: Agent;
}

export function AgentCard({ agent }: AgentCardProps) {
  const getStatusIcon = () => {
    switch (agent.status) {
      case 'processing':
        return <Activity className="w-5 h-5 text-blue-500 animate-pulse" />;
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'error':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Clock className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold text-gray-800">{agent.name}</h3>
        {getStatusIcon()}
      </div>
      {agent.lastQuery && (
        <div className="mb-2">
          <p className="text-sm text-gray-600">Last Query:</p>
          <p className="text-sm text-gray-800">{agent.lastQuery}</p>
        </div>
      )}
      {agent.lastResponse && (
        <div>
          <p className="text-sm text-gray-600">Last Response:</p>
          <p className="text-sm text-gray-800">{agent.lastResponse}</p>
        </div>
      )}
    </div>
  );
}