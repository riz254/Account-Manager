import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { AccountsComponent } from './accounts/accounts.component';

const routes: Routes = [
  {
    path: 'customer',
    children: [
      { path: 'customers', component: CustomersComponent },
      { path: 'accounts/:id', component: AccountsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {}
