# Spreadsheet App

A pixel-perfect React spreadsheet application built with TypeScript and Tailwind CSS.

## Features

- Pixel-perfect design matching the Figma specification
- Google Sheets/Excel-like spreadsheet experience
- Interactive toolbar with functional buttons
- Status and priority badges
- Keyboard navigation with arrow keys
- Cell selection and highlighting
- Responsive tab system
- Search functionality in header
- All buttons log actions to console
- TypeScript strict mode
- ESLint and Prettier configured

## Tech Stack

- **React 18** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **@tanstack/react-table** for the data grid
- **Lucide React** for icons
- **ESLint + Prettier** for code quality

## Setup & Installation

1. **Clone and install dependencies:**
```bash
git clone <your-repo-url>
cd spreadsheet-app
npm install
```

2. **Start the development server:**
```bash
npm run dev
```

3. **Build for production:**
```bash
npm run build
```

4. **Run linting:**
```bash
npm run lint
```

5. **Run type checking:**
```bash
npm run type-check
```

## Project Structure

```
src/
├── components/
│   ├── ui/                 # Reusable UI components
│   ├── SpreadsheetHeader.tsx
│   ├── SpreadsheetToolbar.tsx
│   ├── SpreadsheetGrid.tsx
│   ├── SpreadsheetTabs.tsx
│   ├── StatusBadge.tsx
│   └── PriorityBadge.tsx
├── data/
│   └── mockData.ts        # Sample spreadsheet data
├── types/
│   └── index.ts           # TypeScript type definitions
├── App.tsx
├── main.tsx
└── index.css
```

## Key Features Implemented

### 1. Spreadsheet Grid
- Full data grid with sortable columns
- Cell selection with keyboard navigation
- Row numbering and checkboxes
- Status and priority badges
- Hover effects and interactive cells

### 2. Toolbar Functionality
- Hide fields, Sort, Filter, Call view buttons
- Import, Export, Share actions
- New Action button with success styling
- All buttons log to console when clicked

### 3. Header Components
- Search functionality with icon
- Breadcrumb navigation
- User profile section with notifications
- Responsive design

### 4. Tab System
- Multiple tabs (All Orders, Pending, Reviewed, Arrived)
- Active tab highlighting
- Add new tab functionality

### 5. Keyboard Navigation
- Arrow key navigation between cells
- Cell highlighting and selection
- Spreadsheet-like user experience

## Trade-offs & Decisions

1. **Static Data**: Used mock data instead of API integration for simplicity
2. **Console Logging**: All button actions log to console as requested
3. **Keyboard Navigation**: Implemented basic arrow key navigation
4. **Responsive Design**: Focused on desktop-first approach matching the design
5. **Performance**: Used React Table for efficient rendering of large datasets
