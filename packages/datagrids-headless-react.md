# DataGrids Headless React

## Introduction

The **DataGrids Headless React** package provides a flexible and front-end agnostic solution for managing data grids in React applications. It offers hooks, context, and utilities to handle data fetching, filtering, sorting, pagination, and actions (both inline and bulk) seamlessly.

This package is designed to work with a backend that adheres to the DataGrids schema and API conventions.

## Installation

Install the package via npm:

```bash
npm install @strucura/datagrids-headless-react
```

## Hooks

### useDataGrid

The `useDataGrid` hook is the core of the DataGrids Headless React package. It provides a set of utilities to manage data grids, including fetching data, handling filters, sorting, and pagination.

#### Usage

```typescript

const { 
  columns,
  setColumns,
  filterSets,
  setFilterSets,
  sorts,
  setSorts,
  data,
  pagination,
  setPagination,
  toggleColumn,
  isDataGridLoadin,
  fetchData,
  goToNextPage,
  goToPreviousPage,
  goToPage,
  hasNextPage,    
  hasPreviousPage
 } = useDataGrid({
  schema, // Schema definition for the DataGrid provided by the backend.
  onSuccess, // Callback for successful data fetch
  onError, // Callback for error during data fetch
});
```

### useInlineAction

The `useInlineAction` hook provides a way to manage inline actions for each row in the data grid. It allows you to 
define actions that can only ever be performed on individual rows.

#### Usage

```typescript
const {
  hasInlineActions,
  inlineActions,
  setInlineActions,
  runInlineAction,
  isRunningInlineAction,
} = useInlineAction({
  schema, // Schema definition for the DataGrid provided by the backend.
});
```

### useBulkAction

The `useBulkAction` hook provides a way to manage bulk actions for multiple rows in the data grid. It allows you to define actions that can be performed on multiple selected rows.

#### Usage

```typescript

const {
  bulkActions,
  setBulkActions,
  hasBulkActions,
  selectedRows,
  setSelectedRows,
  toggleRowSelection,
  runBulkAction,
  isRunningBulkAction,
} = useBulkAction({
  schema, // Schema definition for the DataGrid provided by the backend.
});
```

### useBookmark

The `useBookmark` hook provides a way to manage bookmarks for the data grid.  It allows you to persist the current 
state of the data grid (filters, sorts, and column visibility/ordering) to a backend service and retrieve them later.
        
```typescript

const {
  fetchBookmarks,
  setBookmarks,
  bookmarks,
  storeBookmark,
  deleteBookmark,
  isLoadingBookmarks,
  isDeletingBookmark,
  isStoringBookmark,
} = useBookmark({
  schema, // Schema definition for the DataGrid provided by the backend.
});
```
