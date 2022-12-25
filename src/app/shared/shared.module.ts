import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


//material 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatPaginatorModule, MatProgressSpinnerModule, MatSelectModule, MatSortModule, MatTableModule, MatToolbarModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CdkTableModule } from '@angular/cdk/table';
import { TableDynamicComponent } from './components/table/table-dynamic/table-dynamic.component';
import { ActionBtnComponent } from './components/actionButton/action-btn/action-btn.component';



@NgModule({
  declarations: [TableDynamicComponent , ActionBtnComponent],
  imports: [
    MatFormFieldModule, MatInputModule, MatListModule, MatIconModule, MatMenuModule, MatCardModule,
    MatButtonModule, MatProgressSpinnerModule, CommonModule, MatPaginatorModule, FormsModule, MatCheckboxModule,
    CdkTableModule,
    MatMenuModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatInputModule,
    FormsModule,
    MatSortModule,
    MatTableModule,
    ReactiveFormsModule,
    MatSelectModule


  ],
  exports:[
    MatFormFieldModule, MatInputModule, MatListModule, MatIconModule, MatMenuModule, MatCardModule,
    MatButtonModule, MatProgressSpinnerModule, CommonModule, MatPaginatorModule, FormsModule, MatCheckboxModule,
    CdkTableModule,
    MatMenuModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatInputModule,
    FormsModule,
    MatSortModule,
    MatTableModule,
    ReactiveFormsModule,
    MatSelectModule
  ]
})
export class SharedModule { }
