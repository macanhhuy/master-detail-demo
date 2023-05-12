import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ColDef, ICellRendererComp, ICellRendererParams, IsFullWidthRowParams, RowHeightParams } from 'ag-grid-community';
import { getChildData } from './data';

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

  agInit(params: ICellRendererParams): void {
    this.data = params.node.data;
    this.flag = `https://www.ag-grid.com/example-assets/large-flags/${this.data.code}.png`;
  }

  latinText() {
    return '<p>Sample Text in a Paragraph</p><p>Lorem ipsum dolor sit amet, his mazim necessitatibus te, mea volutpat intellegebat at. Ea nec perpetua liberavisse, et modo rebum persius pri. Velit recteque reprimique quo at. Vis ex persius oporteat, esse voluptatum moderatius te vis. Ex agam suscipit aliquando eum. Mediocrem molestiae id pri, ei cibo facilisis mel. Ne sale nonumy sea. Et vel lorem omittam vulputate. Ne prima impedit percipitur vis, erat summo an pro. Id urbanitas deterruisset cum, at legere oportere has. No saperet lobortis elaboraret qui, alii zril at vix, nulla soluta ornatus per ad. Feugiat consequuntur vis ad, te sit quodsi persequeris, labore perpetua mei ad. Ex sea affert ullamcorper disputationi, sit nisl elit elaboraret te, quodsi doctus verear ut eam. Eu vel malis nominati, per ex melius delenit incorrupte. Partem complectitur sed in. Vix dicta tincidunt ea. Id nec urbanitas voluptaria, pri no nostro disputationi. Falli graeco salutatus pri ea.</p><p>Quo ad omnesque phaedrum principes, tale urbanitas constituam et ius, pericula consequat ad est. Ius tractatos referrentur deterruisset an, odio consequuntur sed ad. Ea molestie adipiscing adversarium eos, tale veniam sea no. Mutat nullam philosophia sed ad. Pri eu dicta consulatu, te mollis quaerendum sea. Ei doming commodo euismod vis. Cu modus aliquip inermis his, eos et eirmod regione delicata, at odio definiebas vis.</p><p>Lorem ipsum dolor sit amet, his mazim necessitatibus te, mea volutpat intellegebat at. Ea nec perpetua liberavisse, et modo rebum persius pri. Velit recteque reprimique quo at. Vis ex persius oporteat, esse voluptatum moderatius te vis. Ex agam suscipit aliquando eum. Mediocrem molestiae id pri, ei cibo facilisis mel. Ne sale nonumy sea. Et vel lorem omittam vulputate. Ne prima impedit percipitur vis, erat summo an pro. Id urbanitas deterruisset cum, at legere oportere has. No saperet lobortis elaboraret qui, alii zril at vix, nulla soluta ornatus per ad. Feugiat consequuntur vis ad, te sit quodsi persequeris, labore perpetua mei ad. Ex sea affert ullamcorper disputationi, sit nisl elit elaboraret te, quodsi doctus verear ut eam. Eu vel malis nominati, per ex melius delenit incorrupte. Partem complectitur sed in. Vix dicta tincidunt ea. Id nec urbanitas voluptaria, pri no nostro disputationi. Falli graeco salutatus pri ea.</p><p>Quo ad omnesque phaedrum principes, tale urbanitas constituam et ius, pericula consequat ad est. Ius tractatos referrentur deterruisset an, odio consequuntur sed ad. Ea molestie adipiscing adversarium eos, tale veniam sea no. Mutat nullam philosophia sed ad. Pri eu dicta consulatu, te mollis quaerendum sea. Ei doming commodo euismod vis. Cu modus aliquip inermis his, eos et eirmod regione delicata, at odio definiebas vis.</p>';
  }

  refresh(params: ICellRendererParams): boolean {
    return false;
  }

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
  public rowData: any[] | null = getChildData();
  public getRowHeight: (
    params: RowHeightParams
  ) => number | undefined | null = (params: RowHeightParams) => {
    if (this.isFullWidth(params.data)) {
      return 100;
    }
    return 42;
  };
  public isFullWidthRow: (params: IsFullWidthRowParams) => boolean = (
    params: IsFullWidthRowParams
  ) => {
    return this.isFullWidth(params.rowNode.data);
  };
  public fullWidthCellRenderer: any = FullWidthCellRenderer;

  isFullWidth(data: any) {
    // return true when country is Peru, France or Italy
    return ['Peru', 'France', 'Italy'].indexOf(data.name) >= 0;
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
