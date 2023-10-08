// branch class depends on customer class 
import { Customer } from "./customer.js"
export class Branch {
    name:string;
    customers:Customer[];

    constructor(name:string){
        this.name=name;
        this.customers=[];
    }

    getName():string{
        return this.name;

    }
    getCustomers():Customer[]{
        return this.customers;

    }
    addCustomer(customer:Customer):boolean{
        //check if the customer add or not 

        if (!this.customers.includes(customer)){
         this.customers.push(customer);
          return true ;
        }
        console.log("the customer is here");
        return false;

    }

    addCustomerTransaction(customerId:string , amount:number){
        const customer = this.customers.find((item => item.getId()
        === customerId));
        if (!customer ||!amount){
            return false
        }customer.addTransaction(amount)
            return true ;

        } 

    }






// const sunBranch = new Branch ("sunBranch");
// const customer1 = new Customer("njood", "1")
// const customer2 = new Customer("ali", "1")
// sunBranch.addCustomer(customer1);
// sunBranch.addCustomer(customer2);







