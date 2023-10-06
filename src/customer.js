import {Transaction} from "./transaction.js"

export class Customer {  /// find 
   //  name:string;
   //  id:string;
   //  transactions:Transaction[];

    constructor(name,id){
        this.name=name;
        this.id=id;
        this.transactions=[];
    }

    //method

    getName(){
       return this.name;
    }
    getId(){
        return this.id;
     }
    getTransactions(){
    return this.transactions;
    }
     getBalance(){
     const balance =  this.transactions.reduce(
      (total, transaction) => total + transaction,0);
      if (balance >0){
         return balance;
      }else{
         return "sorry the negative value";
      }
    }
      
     addTransaction(amount){

   //      const newTransaction = new Transaction(amount); //new date
   //      this.transactions.push(newTransaction);
   //      return true;

   //   }
   return this.transactions.push(amount);
}
}
const customer1 = new Customer("njood", "1")


// console.log (customer1.getTransactions());
customer1.addTransaction()
customer1.addTransaction()

console.log(customer1.getBalance());

// customer1.getBalance();

// console.log(customer1.getId());



 