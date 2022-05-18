import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpenseRoutingModule } from './expense-routing.module';
import { ExpenseComponent } from './expense.component';
import { ExpenseListingComponent } from './expense-listing/expense-listing.component';
import { ExpenseAddEditComponent } from './expense-add-edit/expense-add-edit.component';


@NgModule({
  declarations: [
    ExpenseComponent,
    ExpenseListingComponent,
    ExpenseAddEditComponent
  ],
  imports: [
    CommonModule,
    ExpenseRoutingModule
  ]
})
export class ExpenseModule { }
