// src/components/SpreadsheetHeader.tsx
import React from 'react';
import { Search, User, MoreHorizontal } from 'lucide-react';

const SpreadsheetHeader: React.FC = () => {
  const handleClick = (action: string) => {
    console.log(`${action} clicked`);
  };

  return (
    <header className="flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-white">
      <div className="flex items-center space-x-2">
        <div className="text-sm text-gray-500">
          <span className="flex items-center space-x-1">
            <span>
              <svg width="40" height="32" viewBox="0 0 40 32" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="6" width="26" height="20" rx="4" ry="4" fill="#4b6a4f" stroke="none"/>
                <path d="M 4 10 
                        C 4 8.9 4.9 8 6 8
                        L 18 8
                        L 18 24
                        L 6 24
                        C 4.9 24 4 23.1 4 22
                        Z" 
                      fill="white"/>
              </svg>
            </span>
            <span>Workspace</span>
            <span>{'>'}</span>
            <span>Folder 2</span>
            <span>{'>'}</span>
            <span className="text-gray-900 font-medium">Spreadsheet 3</span>
            <MoreHorizontal className="h-3 w-3 text-gray-400 ml-auto" />
          </span>
        </div>
      </div>
      
      <div className="flex items-center space-x-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search within sheet"
            className="pl-10 pr-4 py-1.5 bg-gray-100 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-44"
          />
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={() => handleClick('notifications')}
            className="p-1 text-gray-400 hover:text-gray-600 rounded-md hover:bg-gray-100 relative"
          >
            <svg width="20px" height="18px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#000000"><path d="M13.377 10.573a7.63 7.63 0 0 1-.383-2.38V6.195a5.115 5.115 0 0 0-1.268-3.446 5.138 5.138 0 0 0-3.242-1.722c-.694-.072-1.4 0-2.07.227-.67.215-1.28.574-1.794 1.053a4.923 4.923 0 0 0-1.208 1.675 5.067 5.067 0 0 0-.431 2.022v2.2a7.61 7.61 0 0 1-.383 2.37L2 12.343l.479.658h3.505c0 .526.215 1.04.586 1.412.37.37.885.586 1.412.586.526 0 1.04-.215 1.411-.586s.587-.886.587-1.412h3.505l.478-.658-.586-1.77zm-4.69 3.147a.997.997 0 0 1-.705.299.997.997 0 0 1-.706-.3.997.997 0 0 1-.3-.705h1.999a.939.939 0 0 1-.287.706zm-5.515-1.71l.371-1.114a8.633 8.633 0 0 0 .443-2.691V6.004c0-.563.12-1.113.347-1.616.227-.514.55-.969.969-1.34.419-.382.91-.67 1.436-.837.538-.18 1.1-.24 1.65-.18a4.147 4.147 0 0 1 2.597 1.4 4.133 4.133 0 0 1 1.004 2.776v2.01c0 .909.144 1.818.443 2.691l.371 1.113h-9.63v-.012z"></path></svg>
            <span className="absolute -top-1 -right-1 h-5 w-5 bg-[#4b6a4f] border-2 border-white rounded-full flex items-center justify-center text-xs text-white font-medium">
              2
            </span>
          </button>
          <button
            onClick={() => handleClick('profile')}
            className="flex items-center space-x-2 p-1 rounded-md hover:bg-gray-100"
          >
            <div className="h-8 w-8 bg-[#4b6a4f] rounded-full flex items-center justify-center">
              <User className="h-4 w-4 text-white" />
            </div>
            <div className="text-left">
              <div className="text-sm font-medium text-gray-900">John Doe</div>
              <div className="text-xs text-gray-500">john.doe@company.com</div>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default SpreadsheetHeader;