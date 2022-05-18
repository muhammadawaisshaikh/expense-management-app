import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsComponent } from './accounts.component';
import { AccountListingComponent } from './account-listing/account-listing.component';
import { AccountAddEditComponent } from './account-add-edit/account-add-edit.component';


@NgModule({
  declarations: [
    AccountsComponent,
    AccountListingComponent,
    AccountAddEditComponent
  ],
  imports: [
    CommonModule,
    AccountsRoutingModule
  ]
})
export class AccountsModule { }
