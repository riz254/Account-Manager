import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { AccountsComponent } from './accounts/accounts.component';
import { CustomersComponent } from './customers/customers.component';
import { TransactionComponent } from './transaction/transaction.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AccountsComponent, CustomersComponent, TransactionComponent],
  imports: [CommonModule, CustomerRoutingModule, FormsModule],
})
export class CustomerModule {}
