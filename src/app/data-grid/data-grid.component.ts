import { Component, OnInit, OnDestroy } from '@angular/core';
import { ColDef, GridApi, GridReadyEvent, RowEditingStoppedEvent } from 'ag-grid-community';
import { DataService, DataRow, Department } from '../data.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  private gridApi!: GridApi;

  rowData: DataRow[] = [];
  filterText = '';

  columnDefs: ColDef[] = [
    {
      field: 'id',
      headerName: 'ID',
      width: 80,
      editable: false
    },
    {
      field: 'name',
      headerName: 'Name',
      width: 150,
      editable: true,
      filter: true
    },
    {
      field: 'age',
      headerName: 'Age',
      width: 80,
      editable: true,
      filter: 'agNumberColumnFilter'
    },
    {
      field: 'salary',
      headerName: 'Salary',
      width: 120,
      editable: true,
      filter: 'agNumberColumnFilter',
      valueFormatter: (params) => {
        if (params.value != null) {
          return '$' + params.value.toLocaleString('en-US', { minimumFractionDigits: 2 });
        }
        return '';
      }
    },
    {
      field: 'isActive',
      headerName: 'Active',
      width: 100,
      editable: true,
      cellRenderer: (params: any) => {
        return params.value ? '✓ Active' : '✗ Inactive';
      }
    },
    {
      field: 'department',
      headerName: 'Department',
      width: 140,
      editable: true,
      filter: true
    },
    {
      field: 'rating',
      headerName: 'Rating',
      width: 100,
      editable: true,
      filter: 'agNumberColumnFilter',
      valueFormatter: (params) => {
        if (params.value != null) {
          return params.value.toFixed(1) + '/5.0';
        }
        return '';
      }
    },
    {
      field: 'startDate',
      headerName: 'Start Date',
      width: 120,
      editable: true,
      filter: 'agDateColumnFilter'
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 200,
      editable: true,
      filter: true
    },
    {
      field: 'position',
      headerName: 'Position',
      width: 120,
      editable: true,
      filter: true
    }
  ];

  defaultColDef: ColDef = {
    sortable: true,
    resizable: true,
    flex: 1,
    minWidth: 100
  };

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData()
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        this.rowData = data;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onGridReady(params: GridReadyEvent): void {
    this.gridApi = params.api;
    // Size columns to fit the grid
    this.gridApi.sizeColumnsToFit();
  }

  onRowEditingStopped(event: RowEditingStoppedEvent): void {
    if (event.data) {
      this.dataService.updateRow(event.data);
    }
  }

  onFilterTextChange(): void {
    this.gridApi.setQuickFilter(this.filterText);
  }

  clearFilter(): void {
    this.filterText = '';
    this.gridApi.setQuickFilter('');
  }

  exportToCSV(): void {
    this.gridApi.exportDataAsCsv({
      fileName: 'employee-data.csv'
    });
  }
}