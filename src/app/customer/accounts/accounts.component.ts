import { Component, OnInit } from '@angular/core';
import { Account } from '../../models.model';
import { CustomerService } from '../../customer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css'],
})
export class AccountsComponent implements OnInit {
  customerId: number = 0;
  accounts: Account[] = [];
  showModal = false;
  isEditMode = false;
  selectedAccount: Account = {
    id: 0,
    customerId: 0,
    accountNumber: '',
    accountType: 'Savings',
    balance: 0,
    status: 'Active',
  };

  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.customerId = +params['id']; // Get customer ID from URL
      this.getAccounts();
    });
  }

  /** Load Accounts for the Selected Customer */
  getAccounts() {
    this.accounts = this.customerService.getAccountsByCustomerId(
      this.customerId
    );
  }

  /** Open Modal for Adding or Editing an Account */
  openModal(editMode = false, account?: Account) {
    this.showModal = true;
    this.isEditMode = editMode;

    if (editMode && account) {
      this.selectedAccount = { ...account }; // Clone account for editing
    } else {
      this.selectedAccount = {
        id: 0,
        customerId: this.customerId,
        accountNumber: '',
        accountType: 'Savings',
        balance: 0,
        status: 'Active',
      };
    }
  }

  /** Close Modal */
  closeModal() {
    this.showModal = false;
  }

  /** Save or Update Account */
  saveAccount() {
    if (this.isEditMode) {
      this.customerService.updateAccount(this.selectedAccount);
    } else {
      this.customerService.addAccount(this.selectedAccount);
    }
    this.getAccounts();
    this.closeModal();
  }

  /** Delete Account */
  deleteAccount(id: number) {
    if (confirm('Are you sure you want to delete this account?')) {
      this.customerService.deleteAccount(id);
      this.getAccounts();
    }
  }
}
