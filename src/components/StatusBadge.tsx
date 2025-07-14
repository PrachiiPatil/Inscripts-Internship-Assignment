// src/components/StatusBadge.tsx
import React from 'react';

interface StatusBadgeProps {
  status: 'In-progress' | 'Need to start' | 'Complete' | 'Blocked';
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'In-progress':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'Need to start':
        return 'bg-slate-200 text-slate-700 border-slate-300';
      case 'Complete':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Blocked':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusStyles(status)}`}>
      {status}
    </span>
  );
};

export default StatusBadge;