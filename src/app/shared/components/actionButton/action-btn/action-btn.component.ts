import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TableConsts } from '../../table/models/Btn';
import { TableButtonAction } from '../../table/models/TableButtonAction';

@Component({
  selector: '[action-buttons]',
  templateUrl: './action-btn.component.html',
  styleUrls: ['./action-btn.component.scss']
})
export class ActionBtnComponent implements OnInit {

 
  ngOnInit() { }

  @Input() value?: string
  @Output() buttonAction: EventEmitter<TableButtonAction> = new EventEmitter<TableButtonAction>()

  onEditClick() {
    this.buttonAction.emit({
      name: TableConsts.actionButton.edit,
      value: this.value,
    })
  }
  onDeleteClick() {
    this.buttonAction.emit({ name: TableConsts.actionButton.delete,  value: this.value, })
  }
  onViewClick() {
    this.buttonAction.emit({ name: TableConsts.actionButton.view,  value: this.value, })
  }

}