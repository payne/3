# Astro AG Grid Application

An Angular 16 application demonstrating data grid functionality using Astro UXDS design system and AG Grid.

## Features

- **Data Management**: View and edit 35 rows of employee data
- **Data Types**: Supports integers, floats, strings, booleans, and enumerations
- **Pagination**: Displays 10 rows per page with configurable page sizes
- **Inline Editing**: Click any cell to edit data directly in the grid
- **Advanced Filtering**:
  - Quick search across all columns
  - Column-specific filters
  - Floating filter row
- **Export**: Export filtered data to CSV
- **Responsive Design**: Mobile-friendly layout
- **Astro UXDS**: Space-themed design system for professional applications

## Tech Stack

- **Angular 16**: Modern web framework
- **AG Grid**: Enterprise-grade data grid
- **Astro UXDS**: Design system for space applications
- **SCSS**: Enhanced styling capabilities
- **TypeScript**: Type-safe development

## Column Types

- **ID**: Read-only integer identifier
- **Name**: Editable text field
- **Age**: Numeric input with validation (18-100)
- **Salary**: Currency formatted numeric field
- **Active**: Boolean toggle (Active/Inactive)
- **Department**: Dropdown selection (Engineering, Sales, Marketing, HR, Finance)
- **Rating**: Decimal rating (1.0-5.0)
- **Start Date**: Date picker
- **Email**: Text field with email format
- **Position**: Dropdown (Senior, Junior, Lead, Manager, Director)

## Getting Started

### Prerequisites

- Node.js 16+ and npm
- Angular CLI 16+

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open your browser to `http://localhost:4200`

### Building for Production

```bash
npm run build
```

## Usage

1. **Viewing Data**: The grid displays employee data with pagination
2. **Editing**: Double-click any editable cell to modify values
3. **Filtering**: Use the search box for quick filtering or column filters for specific criteria
4. **Sorting**: Click column headers to sort data
5. **Export**: Click "Export CSV" to download filtered data

## Project Structure

```
src/
├── app/
│   ├── data-grid/           # AG Grid component
│   │   ├── data-grid.component.ts
│   │   ├── data-grid.component.html
│   │   └── data-grid.component.scss
│   ├── data.service.ts      # Data management service
│   ├── app.component.*      # Main app component
│   └── app.module.ts        # Angular module configuration
├── styles.scss              # Global styles
└── index.html              # Main HTML template
```

## Customization

- **Data**: Modify `data.service.ts` to change mock data structure
- **Columns**: Update column definitions in `data-grid.component.ts`
- **Styling**: Customize SCSS files using Astro UXDS design tokens
- **Pagination**: Adjust page size options in the grid configuration