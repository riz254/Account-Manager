// models/customer.model.ts
export interface Customer {
  id: number;
  fullName: string;
  email: string;
  phoneNumber: string;
  dateOfRegistration: string;
  customerType: 'Individual' | 'Business';
  profilePicture: string; // Base64
}

// models/account.model.ts
export interface Account {
  id: number;
  customerId: number;
  accountNumber: string;
  accountType: 'Savings' | 'Checking' | 'Business';
  balance: number;
  status: 'Active' | 'Suspended' | 'Closed';
}

// models/transaction.model.ts
export interface Transaction {
  id: number;
  accountId: number;
  transactionType: 'Deposit' | 'Withdrawal' | 'Transfer' | 'Loan Payment';
  amount: number;
  date: string;
  status: 'Pending' | 'Approved' | 'Rejected';
}
