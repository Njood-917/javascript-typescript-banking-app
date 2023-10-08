// it depends on transaction class

import { Transaction } from "./transaction"; // name of class

export class Customer {
  /// find
  name: string;
  id: string;
  transactions: Transaction[];
  // private balance:number;
  constructor(name: string, id: string) {
    this.name = name;
    this.id = id;
    this.transactions = [];
  }
  //methods
  getName(): string {
    return this.name;
  }
  getId(): string {
    return this.id;
  }
  getTransactions(): Transaction[] {
    return this.transactions;
  }
  getBalance(): number | string {
    // how we can return the balance , from the transaction we find the amount and do sum
    //the new one
    const balance = this.transactions.reduce(
      (total, current) => total + current.amount,
      0
    );
    if (balance > 0) {
      return balance;
    } else {
      return "the value can't be negative";
    }
  }

  addTransaction(amount: number): boolean {
    if (this.transactions.push(new Transaction(amount, new Date()))) {
      return true;
    } else {
      return false;
    }
  }
}

// const customer1 = new Customer("njood", "1");
// customer1.addTransaction(7);
// customer1.addTransaction(5);
// customer1.addTransaction(8);
// console.log(customer1.getBalance());
