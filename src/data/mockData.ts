// src/data/mockData.ts
import { JobRequest, Tab } from '../types';

export const mockJobRequests: JobRequest[] = [
  {
    id: 1,
    task: 'Launch social media campaign for pro...',
    submitted: '15-11-2024',
    status: 'In-progress',
    submitter: 'Aisha Patel',
    url: 'www.aishapatel...',
    assigned: 'Sophie Choudhury',
    priority: 'Medium',
    dueDate: '20-11-2024',
    estValue: 6200000,
  },
  {
    id: 2,
    task: 'Update press kit for company release',
    submitted: '28-10-2024',
    status: 'Need to start',
    submitter: 'Irfan Khan',
    url: 'www.irfankhan...',
    assigned: 'Tejas Pandey',
    priority: 'High',
    dueDate: '30-10-2024',
    estValue: 3500000,
  },
  {
    id: 3,
    task: 'Finalize user testing feedback for app...',
    submitted: '05-12-2024',
    status: 'In-progress',
    submitter: 'Mark Johnson',
    url: 'www.markjohns...',
    assigned: 'Rachel Lee',
    priority: 'Medium',
    dueDate: '10-12-2024',
    estValue: 4750000,
  },
  {
    id: 4,
    task: 'Design new features for the website',
    submitted: '10-01-2025',
    status: 'Complete',
    submitter: 'Emily Green',
    url: 'www.emilygreen...',
    assigned: 'Tom Wright',
    priority: 'Low',
    dueDate: '15-01-2025',
    estValue: 5300000,
  },
  {
    id: 5,
    task: 'Prepare financial report for Q4',
    submitted: '25-01-2025',
    status: 'Blocked',
    submitter: 'Jessica Brown',
    url: 'www.jessicakbro...',
    assigned: 'Kevin Smith',
    priority: 'Low',
    dueDate: '30-01-2025',
    estValue: 2800000,
  },
];

export const tabs: Tab[] = [
  { id: 'all', name: 'All Orders', isActive: true },
  { id: 'pending', name: 'Pending', isActive: false },
  { id: 'reviewed', name: 'Reviewed', isActive: false },
  { id: 'arrived', name: 'Arrived', isActive: false },
];