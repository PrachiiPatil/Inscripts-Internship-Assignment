// src/components/SpreadsheetGrid.tsx
import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, RefreshCw, Plus, MoreHorizontal } from 'lucide-react';
import { mockJobRequests } from '../data/mockData';
import { JobRequest } from '../types';
import StatusBadge from './StatusBadge';
import PriorityBadge from './PriorityBadge';

const SpreadsheetGrid: React.FC = () => {
  const [data] = useState<JobRequest[]>(mockJobRequests);
  const [selectedCell, setSelectedCell] = useState<{ row: number; col: number } | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  // Column configuration for keyboard navigation
  const columns = [
    'jobRequest', 'submitted', 'status', 'submitter', 'url', 'assigned', 'priority', 'dueDate', 'estValue'
  ];

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedCell) return;

      const { row, col } = selectedCell;
      let newRow = row;
      let newCol = col;
      const totalRows = data.length + 20; // Include empty rows

      switch (e.key) {
        case 'ArrowUp':
          e.preventDefault();
          newRow = Math.max(0, row - 1);
          break;
        case 'ArrowDown':
          e.preventDefault();
          newRow = Math.min(totalRows - 1, row + 1);
          break;
        case 'ArrowLeft':
          e.preventDefault();
          newCol = Math.max(0, col - 1);
          break;
        case 'ArrowRight':
          e.preventDefault();
          newCol = Math.min(columns.length - 1, col + 1);
          break;
        case 'Escape':
          e.preventDefault();
          setSelectedCell(null);
          return;
        default:
          return;
      }

      setSelectedCell({ row: newRow, col: newCol });
    };

    if (selectedCell) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [selectedCell, data.length, columns.length]);

  // Handle cell click
  const handleCellClick = (row: number, col: number) => {
    setSelectedCell({ row, col });
  };

  // Check if cell is selected
  const isCellSelected = (row: number, col: number) => {
    return selectedCell?.row === row && selectedCell?.col === col;
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value) + ' ₹';
  };

  const DropdownArrow = () => (
    <ChevronDown className="h-3 w-3 text-gray-400 ml-auto" />
  );

  const GroupHeader = ({ children, color }: { children: React.ReactNode; color: string }) => {
    // Check if the children is "ABC" to apply grey color
    const isABC = children === "ABC";
    const strokeColor = isABC ? "#BCBCBC" : "white";
    return (
        <div className={`flex items-center gap-2 px-2 py-1 text-xs font-medium ${color}`}>
          <svg width="25px" height="25px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="none">
            <line x1="50" y1="20" x2="50" y2="45" stroke={strokeColor} strokeWidth="4" strokeLinecap="round" />
            <line x1="30" y1="45" x2="70" y2="45" stroke={strokeColor} strokeWidth="4" strokeLinecap="round" />
            <line x1="30" y1="45" x2="30" y2="70" stroke={strokeColor} strokeWidth="4" strokeLinecap="round" />
            <line x1="70" y1="45" x2="70" y2="70" stroke={strokeColor} strokeWidth="4" strokeLinecap="round" />
            <path d="M22 65 L30 73 L38 65" stroke={strokeColor} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            <path d="M62 65 L70 73 L78 65" stroke={strokeColor} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
          {children}
          <MoreHorizontal className="h-3 w-3 text-gray-400 ml-auto" />
        </div>
      );
    };

  return (
    <div className="flex-1 overflow-auto" ref={gridRef} tabIndex={0}>
      <div className="min-w-full">
        {/* Category Headers Row */}
        <div className="flex bg-white border-b border-gray-100 h-8">
          {/* Empty space for row numbers */}
          <div className="w-8"></div>
          
          {/* Q3 Financial Overview Header - spans 4 columns (Job Request, Submitted, Status, Submitter) */}
          <div className="w-[576px] flex items-center px-2 py-1 bg-gray-200 border-r border-gray-100">
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <div className="bg-gray-100 border border-gray-300 rounded px-2 py-1 flex items-center gap-1">
                <svg width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
                  <path stroke="#1A73E8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 8h2c1.333 0 4 .8 4 4s-2.667 4-4 4h-2M9 8H7c-1.333 0-4 .8-4 4s2.667 4 4 4h2m-1-4h8"></path>
                </svg>
                Q3 Financial Overview
              </div>
              <RefreshCw className="h-3 w-3 text-red-500 ml-auto" />
            </div>
          </div>
          
          {/* Empty space above URL */}
          <div className="w-28 border-r border-gray-100"></div>
          
          {/* ABC Header */}
          <div className="w-32 bg-green-200 border-r border-gray-100">
            <GroupHeader color="text-green-900">ABC</GroupHeader>
          </div>
          
          {/* Answer a question Header - spans 2 columns (Priority, Due Date) */}
          <div className="w-[224px] bg-purple-200 border-r border-gray-100">
            <GroupHeader color="text-purple-900">Answer a question</GroupHeader>
          </div>
          
          {/* Extract Header */}
          <div className="w-24 bg-orange-200 border-r border-gray-300 border-dashed border-l-dashed">
            <GroupHeader color="text-orange-900">Extract</GroupHeader>
          </div>
          
          {/* Empty column with + */}
          <div className="w-24 bg-gray-100 border-r border-gray-300 border-dashed border-l-dashed flex items-center justify-center">
            <Plus className="h-3 w-3 text-gray-400" />
          </div>
        </div>

        {/* Column Headers Row */}
        <div className="flex bg-gray-50 border-b border-gray-200 h-8 text-xs font-medium text-gray-500">
          {/* Row number column */}
          <div className="w-8 flex items-center justify-center text-gray-300 border-r border-gray-100">#</div>
          
          {/* Job Request */}
          <div className="w-56 flex items-center px-2 border-r border-gray-100 bg-gray-100">
            <svg fill="#BCBCBC" width="16px" height="16px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M336,288H176V256H16V452a12,12,0,0,0,12,12H484a12,12,0,0,0,12-12V256H336Z"/>
              <path d="M496,124a12,12,0,0,0-12-12H384V56a8,8,0,0,0-8-8H136a8,8,0,0,0-8,8v56H28a12,12,0,0,0-12,12V224H496ZM344,112H168V88H344Z"/>
            </svg>
            <span className="ml-2">Job Request</span>
            <DropdownArrow />
          </div>
          
          {/* Submitted */}
          <div className="w-28 flex items-center px-2 border-r border-gray-100 bg-gray-100">
          <svg width="30" height="30" viewBox="4 2 30 50" xmlns="http://www.w3.org/2000/svg">
              <rect x="-2" y="15" width="25" height="25" rx="8" ry="8" fill="#BCBCBC" stroke="none"/>
              <rect x="-2" y="22" width="25" height="6" fill="#BCBCBC" stroke="none"/>
              <rect x="-2" y="22" width="25" height="2" fill="white"/>
              <circle cx="4" cy="28" r="2" fill="white"/>
              <circle cx="10.5" cy="28" r="2" fill="white"/>
              <circle cx="17" cy="28" r="2" fill="white"/>
              <circle cx="4" cy="34.5" r="2" fill="white"/>
              <circle cx="10.5" cy="34.5" r="2" fill="white"/>
            </svg>
            <span>Submitted</span>
            <DropdownArrow />
          </div>
          
          {/* Status */}
          <div className="w-32 flex items-center px-2 border-r border-gray-100 bg-gray-100">
            <svg width="30" height="30" viewBox="-8 0 30 30" xmlns="http://www.w3.org/2000/svg">
              <circle cx="5" cy="15" r="8" fill="#BCBCBC"/>
              <path d="M2 13 L5 17 L8 13" stroke="white" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Status</span>
            <DropdownArrow />
          </div>
          
          {/* Submitter */}
          <div className="w-28 flex items-center px-2 border-r border-gray-100 bg-gray-100">
            <svg width="24px" height="24px" viewBox="0 -5 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 11.796C14.7189 11.796 16.9231 9.60308 16.9231 6.89801C16.9231 4.19294 14.7189 2.00005 12 2.00005C9.28106 2.00005 7.07692 4.19294 7.07692 6.89801C7.07692 9.60308 9.28106 11.796 12 11.796Z" fill="#BCBCBC"></path>
             <path d="M14.5641 13.8369H9.4359C6.46154 13.8369 4 16.2859 4 19.245C4 19.9593 4.30769 20.5716 4.92308 20.8777C5.84615 21.3879 7.89744 22.0001 12 22.0001C16.1026 22.0001 18.1538 21.3879 19.0769 20.8777C19.5897 20.5716 20 19.9593 20 19.245C20 16.1838 17.5385 13.8369 14.5641 13.8369Z" fill="#BCBCBC"></path>
            </svg>
            <span>Submitter</span>
            <DropdownArrow />
          </div>
          
          {/* URL */}
          <div className="w-28 flex items-center px-2 border-r border-gray-100 bg-gray-100">
            <svg width="24px" height="24px" viewBox="0 -2 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="9" fill="#BCBCBC" stroke="rgb(243, 244, 246)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4 15L20 15" stroke="rgb(243, 244, 246)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4 9L20 9" stroke="rgb(243, 244, 246)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M11.5 3C6.5 7 6.5 17 11.5 21" stroke="rgb(243, 244, 246)" strokeWidth="1" fill="none" strokeLinecap="round"/>
              <path d="M12.5 3C17.5 7 17.5 17 12.5 21" stroke="rgb(243, 244, 246)" strokeWidth="1" fill="none" strokeLinecap="round"/>
            </svg>
            <span>URL</span>
            <DropdownArrow />
          </div>
          
          {/* Assigned */}
          <div className="w-32 flex items-center px-2 border-r border-gray-100 bg-green-100">
            <svg width="20px" height="20px" viewBox="0 -5 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g transform="translate(8, 8) scale(0.8)">
                <circle cx="8" cy="8" r="10" fill="#BCBCBC"/>
                <circle cx="5" cy="5" r="1.5" fill="white"/>
                <circle cx="11" cy="5" r="1.5" fill="white"/>
                <path d="M4 10C4 10 5.5 12 8 12C10.5 12 12 10 12 10" stroke="white" stroke-width="1.5" stroke-linecap="round" fill="none"/>
              </g>
              <g transform="translate(-2, -2) scale(0.8)">
                <path d="M17 16a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4.01V4a1 1 0 0 1 1-1 1 1 0 0 1 1 1v6h1V2a1 1 0 0 1 1-1 1 1 0 0 1 1 1v8h1V1a1 1 0 1 1 2 0v9h1V2a1 1 0 0 1 1-1 1 1 0 0 1 1 1v13h1V9a1 1 0 0 1 1-1h1v8z" fill="#BCBCBC" stroke="#dcfce7" stroke-width="0.5"/>
              </g>
            </svg>
            <span className="text-green-800">Assigned</span>
          </div>
          
          {/* Priority */}
          <div className="w-28 flex items-center px-2 border-r border-gray-100 bg-purple-100">
            <span className="text-purple-800">Priority</span>
          </div>
          
          {/* Due Date */}
          <div className="w-28 flex items-center px-2 border-r border-gray-100 bg-purple-100">
            <span className="text-purple-800">Due Date</span>
          </div>
          
          {/* Est. Value */}
          <div className="w-24 flex items-center px-2 border-r border-gray-300 bg-orange-100 border-dashed border-l-dashed">
            <span className="text-orange-800">Est. Value</span>
          </div>
          
          {/* Empty column header */}
          <div className="w-24 border-r border-gray-300 bg-white border-dashed border-l-dashed"></div>
        </div>

        {/* Data Rows */}
        <div className="bg-white">
          {data.map((item, index) => (
            <div key={item.id} className="flex h-7 hover:bg-gray-50 border-b border-gray-100">
              {/* Row number */}
              <div className="w-8 flex items-center justify-center text-xs text-gray-400 border-r border-gray-100">
                {index + 1}
              </div>
              
              {/* Job Request */}
              <div 
                className={`w-56 flex items-center px-2 text-xs text-gray-900 border-r border-gray-100 cursor-pointer ${
                  isCellSelected(index, 0) ? 'bg-transparent ring-2 ring-green-500 shadow-lg' : ''
                }`}
                onClick={() => handleCellClick(index, 0)}
              >
                <div className="truncate">{item.task}</div>
              </div>
              
              {/* Submitted - RIGHT ALIGNED */}
              <div 
                className={`w-28 flex items-center justify-end px-2 text-xs text-gray-900 border-r border-gray-100 cursor-pointer ${
                  isCellSelected(index, 1) ? 'bg-transparent ring-2 ring-green-500 shadow-lg' : ''
                }`}
                onClick={() => handleCellClick(index, 1)}
              >
                {item.submitted}
              </div>
              
              {/* Status - CENTER ALIGNED */}
              <div 
                className={`w-32 flex items-center justify-center px-2 border-r border-gray-100 cursor-pointer ${
                  isCellSelected(index, 2) ? 'bg-transparent ring-2 ring-green-500 shadow-lg' : ''
                }`}
                onClick={() => handleCellClick(index, 2)}
              >
                <StatusBadge status={item.status} />
              </div>
              
              {/* Submitter */}
              <div 
                className={`w-28 flex items-center px-2 text-xs text-gray-900 border-r border-gray-100 cursor-pointer ${
                  isCellSelected(index, 3) ? 'bg-transparent ring-2 ring-green-500 shadow-lg' : ''
                }`}
                onClick={() => handleCellClick(index, 3)}
              >
                {item.submitter}
              </div>
              
              {/* URL - BLACK TEXT WITH UNDERLINE */}
              <div 
                className={`w-28 flex items-center px-2 text-xs text-black border-r border-gray-100 cursor-pointer ${
                  isCellSelected(index, 4) ? 'bg-transparent ring-2 ring-green-500 shadow-lg' : ''
                }`}
                onClick={() => handleCellClick(index, 4)}
              >
                <span className="truncate underline">
                  {item.url}
                </span>
              </div>
              
              {/* Assigned */}
              <div 
                className={`w-32 flex items-center px-2 text-xs text-gray-900 border-r border-gray-100 cursor-pointer ${
                  isCellSelected(index, 5) ? 'bg-transparent ring-2 ring-green-500 shadow-lg' : ''
                }`}
                onClick={() => handleCellClick(index, 5)}
              >
                {item.assigned}
              </div>
              
              {/* Priority - CENTER ALIGNED */}
              <div 
                className={`w-28 flex items-center justify-center px-2 border-r border-gray-100 cursor-pointer ${
                  isCellSelected(index, 6) ? 'bg-transparent ring-2 ring-green-500 shadow-lg' : ''
                }`}
                onClick={() => handleCellClick(index, 6)}
              >
                <PriorityBadge priority={item.priority} />
              </div>
              
              {/* Due Date - RIGHT ALIGNED */}
              <div 
                className={`w-28 flex items-center justify-end px-2 text-xs text-gray-900 border-r border-gray-100 cursor-pointer ${
                  isCellSelected(index, 7) ? 'bg-transparent ring-2 ring-green-500 shadow-lg' : ''
                }`}
                onClick={() => handleCellClick(index, 7)}
              >
                {item.dueDate}
              </div>
              
              {/* Est. Value - RIGHT ALIGNED */}
              <div 
                className={`w-24 flex items-center justify-end px-2 text-xs text-gray-900 border-r border-gray-300 border-dashed border-l-dashed cursor-pointer ${
                  isCellSelected(index, 8) ? 'bg-transparent ring-2 ring-green-500 shadow-lg' : ''
                }`}
                onClick={() => handleCellClick(index, 8)}
              >
                {formatCurrency(item.estValue)}
              </div>
              
              {/* Empty column */}
              <div className="w-24 border-r border-gray-300 border-dashed border-l-dashed"></div>
            </div>
          ))}
          
          {/* Empty rows for spreadsheet feel */}
          {Array.from({ length: 20 }, (_, i) => (
            <div key={`empty-${i}`} className="flex h-7 hover:bg-white border-b border-gray-100">
              <div className="w-8 flex items-center justify-center text-xs text-gray-400 border-r border-gray-100">
                {data.length + i + 1}
              </div>
              <div 
                className={`w-56 border-r border-gray-100 cursor-pointer ${
                  isCellSelected(data.length + i, 0) ? 'bg-transparent ring-2 ring-green-500 shadow-lg' : ''
                }`}
                onClick={() => handleCellClick(data.length + i, 0)}
              ></div>
              <div 
                className={`w-28 border-r border-gray-100 cursor-pointer ${
                  isCellSelected(data.length + i, 1) ? 'bg-transparent ring-2 ring-green-500 shadow-lg' : ''
                }`}
                onClick={() => handleCellClick(data.length + i, 1)}
              ></div>
              <div 
                className={`w-32 border-r border-gray-100 cursor-pointer ${
                  isCellSelected(data.length + i, 2) ? 'bg-transparent ring-2 ring-green-500 shadow-lg' : ''
                }`}
                onClick={() => handleCellClick(data.length + i, 2)}
              ></div>
              <div 
                className={`w-28 border-r border-gray-100 cursor-pointer ${
                  isCellSelected(data.length + i, 3) ? 'bg-transparent ring-2 ring-green-500 shadow-lg' : ''
                }`}
                onClick={() => handleCellClick(data.length + i, 3)}
              ></div>
              <div 
                className={`w-28 border-r border-gray-100 cursor-pointer ${
                  isCellSelected(data.length + i, 4) ? 'bg-transparent ring-2 ring-green-500 shadow-lg' : ''
                }`}
                onClick={() => handleCellClick(data.length + i, 4)}
              ></div>
              <div 
                className={`w-32 border-r border-gray-100 cursor-pointer ${
                  isCellSelected(data.length + i, 5) ? 'bg-transparent ring-2 ring-green-500 shadow-lg' : ''
                }`}
                onClick={() => handleCellClick(data.length + i, 5)}
              ></div>
              <div 
                className={`w-28 border-r border-gray-100 cursor-pointer ${
                  isCellSelected(data.length + i, 6) ? 'bg-transparent ring-2 ring-green-500 shadow-lg' : ''
                }`}
                onClick={() => handleCellClick(data.length + i, 6)}
              ></div>
              <div 
                className={`w-28 border-r border-gray-100 cursor-pointer ${
                  isCellSelected(data.length + i, 7) ? 'bg-transparent ring-2 ring-green-500 shadow-lg' : ''
                }`}
                onClick={() => handleCellClick(data.length + i, 7)}
              ></div>
              <div 
                className={`w-24 border-r border-gray-300 border-dashed border-l-dashed cursor-pointer ${
                  isCellSelected(data.length + i, 8) ? 'bg-transparent ring-2 ring-green-500 shadow-lg' : ''
                }`}
                onClick={() => handleCellClick(data.length + i, 8)}
              ></div>
              <div className="w-24 border-r border-gray-300 border-dashed border-l-dashed"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpreadsheetGrid;