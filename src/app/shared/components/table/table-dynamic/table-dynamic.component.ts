import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TableColumn } from '../models/Colum';
import { TableButtonAction } from '../models/TableButtonAction';
import { SelectionModel } from '@angular/cdk/collections';


@Component({
  selector: 'app-table-dynamic',
  templateUrl: './table-dynamic.component.html',
  styleUrls: ['./table-dynamic.component.scss']
})
export class TableDynamicComponent implements OnInit,OnChanges {

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @Output() action: EventEmitter<TableButtonAction> = new EventEmitter<TableButtonAction>() 
  @Output() DeleteRows: EventEmitter<any> = new EventEmitter<any>() 

  @Input() columns!: Array<TableColumn>;
  @Input() dataset: Array<any> = [];
  @Output() refreshT: EventEmitter<any> = new EventEmitter<any>()

  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  dataSource!: MatTableDataSource<any>;
  selection = new SelectionModel<any>(true, []);
  displayedColumns: string[] = [];
  value!: string;
  activeLoading:boolean=false;
  mensaje:string="";
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
   // this.dataSource = new MatTableDataSource<any>(this.dataset);
   this.llenaTabla();
  }


  ngOnInit() {
    this.activeLoading=true;
    this.mensaje="CARGANDO INFORMACIÓN"
   this.initTable();
}

initTable(){
     // set checkbox column
     this.displayedColumns.push("select");

     // set table columns
     this.displayedColumns = this.displayedColumns.concat(this.columns.map(x => x.columnDef));    // pre-fix static
 
     // add action column
     this.displayedColumns.push("action");
    setTimeout(() => {
     this.llenaTabla()
    }, 10);
}

llenaTabla(){
  console.log('entra')
  this.dataSource = new MatTableDataSource<any>(this.dataset);
  // set pagination
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
  this.paginator._intl.itemsPerPageLabel = 'registros por pagina';


  this.paginator._intl.getRangeLabel = function (page, pageSize, length) {
    if (length === 0 || pageSize === 0) {
      return '0 de ' + length;
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
    return startIndex + 1 + ' - ' + endIndex + ' de ' + length
}
this.activeLoading=false;
}

  onTableAction(e: any): void {
    this.action.emit(e)
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  refresh(){
    this.refreshT.emit(true);
  }

  delete(){
    this.DeleteRows.emit(this.selection.selected);
  }
}