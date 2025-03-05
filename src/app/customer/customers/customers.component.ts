import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerService } from '../../customer.service';
import { Customer } from '../../models.model';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent {
  // This object matches the required JSON structure.

  showModal = false; // Controls modal visibility

  // This would normally be populated from an API.
  customers: Customer[] = [];
  customer: Customer = {
    id: 0,
    fullName: '',
    email: '',
    phoneNumber: '',
    dateOfRegistration: '',
    customerType: 'Individual',
    profilePicture: '',
  };

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.getAllCustomers(); // Load Customers when component starts
  }

  openModal() {
    this.showModal = true;
    this.customer = {
      id: 0,
      fullName: '',
      email: '',
      phoneNumber: '',
      dateOfRegistration: '',
      customerType: 'Individual',
      profilePicture: '',
    };
  }

  /** Close Modal */
  closeModal() {
    this.showModal = false;
  }

  /** Get all Customers */
  getAllCustomers() {
    this.customers = this.customerService.getCustomers();
  }

  // Called when the form is submitted.
  onSubmit(form: NgForm) {
    if (form.valid) {
      this.customer.id = new Date().getTime(); // Generate a unique ID

      this.customerService.addCustomer(this.customer);
      alert('Customer added successfully!');

      this.getAllCustomers(); // Refresh list
      this.closeModal();
      form.resetForm();
    }
  }
}
