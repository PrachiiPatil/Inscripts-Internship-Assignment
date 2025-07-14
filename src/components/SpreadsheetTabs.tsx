// src/components/SpreadsheetTabs.tsx
import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { tabs as initialTabs } from '../data/mockData';
import { Tab } from '../types';

const SpreadsheetTabs: React.FC = () => {
  const [tabs, setTabs] = useState<Tab[]>(initialTabs);

  const handleTabClick = (tabId: string) => {
    console.log(`Tab ${tabId} clicked`);
    setTabs(tabs.map(tab => ({ ...tab, isActive: tab.id === tabId })));
  };

  const handleAddTab = () => {
    console.log('Add tab clicked');
  };

  return (
    <div className="flex items-center px-4 border-t border-b border-gray-200 bg-white min-h-[42px] space-x-1">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => handleTabClick(tab.id)}
          className={`relative flex items-center px-4 py-2 text-sm font-medium transition-all ${
            tab.isActive
              ? 'bg-green-50 text-green-700 border-t-2 border-t-green-600'
              : 'bg-white text-gray-500 hover:bg-gray-50 border-t-2 border-t-transparent'
          }`}
        >
          {tab.name}
          {tab.count && (
            <span className={`ml-2 px-2 py-0.5 text-xs rounded-full ${
              tab.isActive
                ? 'bg-green-100 text-green-800'
                : 'bg-gray-200 text-gray-600'
            }`}>
              {tab.count}
            </span>
          )}
        </button>
      ))}
      <button
        onClick={handleAddTab}
        className="ml-2 p-2 text-gray-400 hover:text-gray-600 rounded-md hover:bg-gray-100"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
};

export default SpreadsheetTabs;