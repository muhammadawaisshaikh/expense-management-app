import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'accounts',
    loadChildren: () => import('./components/accounts/accounts.module').then(m => m.AccountsModule)
  },
  {
    path: 'expense',
    loadChildren: () => import('./components/expense/expense.module').then(m => m.ExpenseModule)
  },
  {
    path: 'reports',
    loadChildren: () => import('./components/reports/reports.module').then(m => m.ReportsModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./components/contact/contact.module').then(m => m.ContactModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
