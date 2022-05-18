import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExpenseComponent } from './expense.component';
import { ExpenseListingComponent } from './expense-listing/expense-listing.component';
import { ExpenseAddEditComponent } from './expense-add-edit/expense-add-edit.component';

const routes: Routes = [
  {
    path: '',
    component: ExpenseComponent,
    children: [
      {
        path: '',
        component: ExpenseListingComponent
      },
      {
        path: 'expense-listing',
        component: ExpenseListingComponent
      },
      {
        path: 'expense-add-edit',
        component: ExpenseAddEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpenseRoutingModule { }
