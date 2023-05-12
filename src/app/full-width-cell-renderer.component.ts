import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ColDef, ICellRendererComp, ICellRendererParams, IsFullWidthRowParams, RowHeightParams } from 'ag-grid-community';

@Component({
  selector: 'full-width-cell',
  template: `
    <ag-grid-angular
    style="width: 100%; height: 100%;"
    class="ag-theme-alpine"
    [columnDefs]="columnDefs"
    [defaultColDef]="defaultColDef"
    [rowData]="rowData"
  ></ag-grid-angular>
  `,
  styles: [
    `
    ag-grid-angular {
      padding-left: 60px;
    }
    `
  ]
})
export class FullWidthCellRenderer implements ICellRendererAngularComp {
  public data: any;
  public flag!: string;

  public columnDefs: ColDef[] = [
    { field: 'name', cellRenderer: CountryCellRenderer },
    { field: 'continent' },
    { field: 'language' },
  ];
  public defaultColDef: ColDef = {
    flex: 1,
    sortable: true,
    resizable: true,
    filter: true,
  };

  public rowData: any[]  = [];

  public fullWidthCellRenderer: any = FullWidthCellRenderer;

  agInit(params: ICellRendererParams): void {
    this.data = params.node.data;
    this.rowData = this.data?.detail || [];
    this.flag = `https://www.ag-grid.com/example-assets/large-flags/${this.data.code}.png`;
  }

  refresh(params: ICellRendererParams): boolean {
    return false;
  }
}

class CountryCellRenderer implements ICellRendererComp {
  eGui!: HTMLElement;

  init(params: ICellRendererParams) {
    const flag = `<img border="0" width="15" height="10" src="https://www.ag-grid.com/example-assets/flags/${params.data.code}.png">`;

    const eTemp = document.createElement('div');
    eTemp.innerHTML = `<span style="cursor: default;">${flag} ${params.value}</span>`;
    this.eGui = eTemp.firstElementChild as HTMLElement;
  }

  getGui() {
    return this.eGui;
  }

  refresh(params: ICellRendererParams): boolean {
    return false;
  }
}
