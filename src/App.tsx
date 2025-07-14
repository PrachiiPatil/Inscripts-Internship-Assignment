// src/App.tsx
import React from 'react';
import SpreadsheetHeader from './components/SpreadsheetHeader';
import SpreadsheetToolbar from './components/SpreadsheetToolbar';
// import CategoryHeaders from './components/CategoryHeaders';
import SpreadsheetGrid from './components/SpreadsheetGrid';
import SpreadsheetTabs from './components/SpreadsheetTabs';

const App: React.FC = () => {
  return (
    <div className="h-screen flex flex-col bg-white">
      <SpreadsheetHeader />
      <SpreadsheetToolbar />
      {/* <CategoryHeaders /> */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <SpreadsheetGrid />
        <SpreadsheetTabs />
      </div>
    </div>
  );
};

export default App;