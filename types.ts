
export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export interface CreativeIdea {
  title: string;
  description: string;
  category: string;
}
