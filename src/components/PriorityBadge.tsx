// src/components/PriorityBadge.tsx
import React from 'react';

interface PriorityBadgeProps {
  priority: 'High' | 'Medium' | 'Low';
}

const PriorityBadge: React.FC<PriorityBadgeProps> = ({ priority }) => {
  const getPriorityStyles = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'text-red-600';
      case 'Medium':
        return 'text-yellow-600';
      case 'Low':
        return 'text-blue-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <span className={`inline-flex items-center text-xs font-medium ${getPriorityStyles(priority)}`}>
      {priority}
    </span>
  );
};

export default PriorityBadge;