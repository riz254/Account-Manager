import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './models.model';
import { Account } from './models.model';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private storageKey = 'customers';
  private accountStorageKey = 'accounts';

  getCustomers(): Customer[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  getCustomerById(id: number): Customer | null {
    return this.getCustomers().find((customer) => customer.id === id) || null;
  }

  addCustomer(customer: Customer) {
    const customers = this.getCustomers();
    customer.id = customers.length + 1; // Auto-increment
    customers.push(customer);
    localStorage.setItem(this.storageKey, JSON.stringify(customers));
  }

  updateCustomer(updatedCustomer: Customer) {
    const customers = this.getCustomers().map((customer) =>
      customer.id === updatedCustomer.id ? updatedCustomer : customer
    );
    localStorage.setItem(this.storageKey, JSON.stringify(customers));
  }

  deleteCustomer(id: number) {
    const customers = this.getCustomers().filter(
      (customer) => customer.id !== id
    );
    localStorage.setItem(this.storageKey, JSON.stringify(customers));
  }

  //  Get all accounts
  getAccounts(): Account[] {
    return JSON.parse(localStorage.getItem(this.accountStorageKey) || '[]');
  }

  // Get accounts for a specific customer
  getAccountsByCustomerId(customerId: number): Account[] {
    return this.getAccounts().filter(
      (account) => account.customerId === customerId
    );
  }

  //  Add a new account
  addAccount(account: Account) {
    const accounts = this.getAccounts();
    account.id = accounts.length + 1; // Auto-increment ID
    accounts.push(account);
    localStorage.setItem(this.accountStorageKey, JSON.stringify(accounts));
  }

  // Update an existing account
  updateAccount(updatedAccount: Account) {
    const accounts = this.getAccounts().map((account) =>
      account.id === updatedAccount.id ? updatedAccount : account
    );
    localStorage.setItem(this.accountStorageKey, JSON.stringify(accounts));
  }

  // Delete an account
  deleteAccount(accountId: number) {
    const accounts = this.getAccounts().filter(
      (account) => account.id !== accountId
    );
    localStorage.setItem(this.accountStorageKey, JSON.stringify(accounts));
  }
}
