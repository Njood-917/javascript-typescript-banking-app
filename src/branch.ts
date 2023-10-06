// branch class depends on customer class 
import { Customer } from "./customer.js"
export class Branch {
    name:string;
    customers:Customer[];

    constructor(name:string){
        this.name=name;
        this.customers=[];
    }

    getName(){
        return this.name;

    }
    getCustomers(){
        return this.customers; // maybe change

    }
    addCustomer(customer:Customer){
        //check if the customer add or not 
        if (!this.customers.includes(customer)){
         this.customers.push(customer);
          return true ;
        }
        console.log("the customer is here");
        return false;

    }

    addCustomerTransaction(customerId:number , amount:number){
        const customer = this.customers.find(customer => customer.id === customerId);
        if (customer){
            customer.addTransaction(amount)

        } 

    }
}


// const sunBranch = new Branch ("sunBranch");
// const customer1 = new Customer("njood", "1")
// const customer2 = new Customer("ali", "1")
// sunBranch.addCustomer(customer1);
// sunBranch.addCustomer(customer2);







