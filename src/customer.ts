// it depends on transaction class

import {Transaction} from "./transaction.js"

export class Customer {  /// find 
    name:string;
    id:string;
    transactions:Transaction[];
    constructor(name:string,id:string){
        this.name=name;
        this.id=id;
        this.transactions=[];
    }
    //methods
    getName(){
       return this.name;
    }
    getId(){
        return this.id;
     }
    getTransactions(){
    return this.transactions;
    }
     getBalance(){ // how we can return the balance , from the transaction we find the amount and do sum 
      //the new one 
     return this.transactions.reduce(
         (total, current)=> total + current.amount ,0 
      );
     }
      
   
      
    addTransaction(amount:number){
      if (amount < 0){
         console.log("the amount can't be negative");
         return false;
      }
      //push amount to transaction
      const transaction = new Transaction (amount,new Date())
      this.transactions.push(transaction);
      return true;
   
    }
 
}
    
// const customer1 = new Customer("njood", "1");
// customer1.addTransaction(7);
// customer1.addTransaction(5);
// customer1.addTransaction(8);
// console.log(customer1.getBalance());

