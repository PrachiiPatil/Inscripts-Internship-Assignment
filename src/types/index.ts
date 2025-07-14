// src/types/index.ts
export interface JobRequest {
  id: number;
  task: string;
  submitted: string;
  status: 'In-progress' | 'Need to start' | 'Complete' | 'Blocked';
  submitter: string;
  url: string;
  assigned: string;
  priority: 'High' | 'Medium' | 'Low';
  dueDate: string;
  estValue: number;
}

export interface Tab {
  id: string;
  name: string;
  isActive: boolean;
  count?: number;
}

export interface Column {
  id: string;
  label: string;
  width: string;
  sortable?: boolean;
  resizable?: boolean;
}