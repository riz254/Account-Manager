import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerService } from '../../customer.service';
import { Customer } from '../../models.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent {
  showModal = false; // Controls modal visibility
  isEditMode = false;

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

  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getAllCustomers();
  }

  openModal() {
    this.showModal = true;
    this.isEditMode = false; // FIX: Corrected property name

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

  closeModal() {
    this.showModal = false;
  }

  getAllCustomers() {
    this.customers = this.customerService.getCustomers();
  }

  /** Open Modal and Load Data for Editing */
  editCustomer(id: number) {
    const selectedCustomer = this.customerService.getCustomerById(id);
    if (selectedCustomer) {
      this.customer = { ...selectedCustomer }; // Clone object
      this.isEditMode = true;
      this.showModal = true;
    }
  }

  /** Delete Customer */
  deleteCustomer(id: number) {
    if (confirm('Are you sure you want to delete this customer?')) {
      this.customerService.deleteCustomer(id);
      this.getAllCustomers(); // Refresh list
      alert('Customer deleted successfully!');
    }
  }

  /** Add or Update Customer */
  onSubmit(form: NgForm) {
    if (form.valid) {
      if (this.isEditMode) {
        // Update Customer
        this.customerService.updateCustomer(this.customer);
        alert('Customer updated successfully!');
      } else {
        // Add New Customer
        this.customer.id = new Date().getTime(); // Generate Unique ID
        this.customerService.addCustomer(this.customer);
        alert('Customer added successfully!');
      }

      this.getAllCustomers();
      this.closeModal();
      form.resetForm();
    }
  }
}
