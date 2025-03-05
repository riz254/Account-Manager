import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './models.model';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private storageKey = 'customers';

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
}
