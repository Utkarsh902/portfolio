
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  tags: string[];
  imageUrl: string;
  link?: string;
  github?: string;
  technicalDetails: string[];
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: 'Software' | 'Hardware' | 'Theory' | 'Tools';
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
