import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountsComponent } from './accounts.component';
import { AccountListingComponent } from './account-listing/account-listing.component';
import { AccountAddEditComponent } from './account-add-edit/account-add-edit.component';

const routes: Routes = [
  {
    path: '',
    component: AccountsComponent,
    children: [
      {
        path: '',
        component: AccountListingComponent
      },
      {
        path: 'account-listing',
        component: AccountListingComponent
      },
      {
        path: 'account-addedit',
        component: AccountAddEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
