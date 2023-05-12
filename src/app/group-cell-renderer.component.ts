import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'custom-group-cell-renderer',
  template: `
  <div [class.is-expanded]="isExpanded" (click)="onClick($event)" class="toggle-child">
    <svg xmlns="http://www.w3.org/2000/svg" width="14.8" height="8.88" viewBox="0 0 14.8 8.88" aria-hidden="true">
      <path id="Arrow" d="M160,96.9l.957-.9,7.923,7.4-7.923,7.4-.957-.893,6.961-6.507Z" transform="translate(110.8 -160) rotate(90)" fill="#0d4d8a" _ngcontent-viu-c546=""></path>
    </svg>
  </div>
  `,
  styles: [`
    .toggle-child:hover {
      cursor: pointer;
    }
    .toggle-child svg {
      width: 10px;
    }
    .toggle-child.is-expanded svg {
      transform: rotateZ(-180deg);
    }
  `]
})

export class CustomGroupCellRenderer implements ICellRendererAngularComp {
  params: any;
  isDisabled: boolean = false;
  isExpanded: boolean = false;
  agInit(params: any): void {
    this.params = params;
  }

  onClick(event: any) {
    this.isExpanded = !this.isExpanded;
    if (this.params.onClick instanceof Function) {
      const params = {
        event: event,
        isExpanded: this.isExpanded,
        data: this.params.data,
        node: this.params.node
      }
      this.params.onClick(params);
    }
  }

  refresh(): boolean {
    return true;
  }
}
