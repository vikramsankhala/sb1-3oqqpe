export interface Agent {
  id: string;
  name: string;
  status: 'idle' | 'processing' | 'completed' | 'error';
  lastQuery?: string;
  lastResponse?: string;
}

export interface QueryResult {
  agentId: string;
  response: string;
  timestamp: number;
}

export interface OrchestratorState {
  query: string;
  results: QueryResult[];
  activeAgents: Agent[];
  isProcessing: boolean;
}