import { Component } from '@angular/core';

import { getData } from './data';
import { FullWidthCellRenderer } from './full-width-cell-renderer.component';
import { ColDef, RowHeightParams, IsFullWidthRowParams, ICellRendererComp, ICellRendererParams, RowDataTransaction, GridApi, GridOptions } from 'ag-grid-community';
import { CustomGroupCellRenderer } from './group-cell-renderer.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  frameworkComponents = {
    customGroupCellRenderer: CustomGroupCellRenderer,
  };
  public columnDefs: ColDef[] = [
    {
      field: "activityId", headerName: "",
      cellRenderer: "customGroupCellRenderer",
      cellRendererParams: {
        onClick: (params: any) => {
          this.handleToggleChildGrid(params);
        }
      },
      flex: 1, minWidth: 40, maxWidth: 40, sortable: false, resizable: false
    },
    { field: 'description' },
    { field: 'frequency' },
    { field: 'startDate' },
    { field: 'endDate' },
    { field: 'type' },
    { field: 'charge' },
    { field: 'internalComments' },
  ];

  public defaultColDef: ColDef = {
    flex: 1,
    sortable: true,
    resizable: true,
    filter: true,
  };

  public rowData: any[] | null = getData();

  gridApi!: GridApi;
  gridOptions: GridOptions;

  constructor() {
    this.gridOptions = {
      columnDefs: this.columnDefs,
      rowSelection: "single",
      pagination: true,
      frameworkComponents: this.frameworkComponents,
      fullWidthCellRenderer: FullWidthCellRenderer,
      isFullWidthCell: this.isFullWidthCell,
      getRowHeight: (params) => {
        return params?.data?.isFullWidth ? 180 : 42;
      },
      suppressPaginationPanel: true,
      onGridReady: (params) => {
        this.gridApi = params.api;
      },
      onFirstDataRendered(event) {
        event.api.sizeColumnsToFit();
      },
    };
  }

  isFullWidthCell(params: any): boolean {
    return params.data.isFullWidth;
  }

  handleToggleChildGrid(params: any) {
    params.node.setExpanded(params.isExpanded);
    let trans: RowDataTransaction;
    const nextRow = this.gridApi.getDisplayedRowAtIndex(params.node.childIndex + 1);
    const childNode = { ...params.data, isFullWidth: true, parentId: params.data.activityId };
    if (params.isExpanded) {
      if (!nextRow || nextRow && nextRow.data.parentId !== params.data.activityId) {
        trans = {
          add: [childNode],
          addIndex: params.node.childIndex + 1
        };
        this.gridApi.applyTransaction(trans);
      }
    } else {
      trans = {
        remove: [nextRow?.data]
      };
      this.gridApi.applyTransaction(trans);
    }
  }
}
