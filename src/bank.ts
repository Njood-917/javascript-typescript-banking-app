import {Transaction} from"./transaction";
import {Customer} from "./customer";
import {Branch} from "./branch";

export class Bank {
    name:string;
     branshes:Branch[];
    constructor(name:string){
        this.name=name;
        this.branshes=[];

    }
    addBransh(bransh:Branch){
        return;
    }
    addCustomer(bransh:Branch,customer:Customer){
        return;
    }
    addCustomerTransaction(bransh:Branch,customerId:string, amount:number){
        return;

    }
    checkBranch (bransh:Branch){
        return;

    }
    listCustomers(bransh:Branch,includeTransaction:Transaction){
        return;
    }
}

// const arizonaBank = new Bank("Arizona")
// const westBranch = new Branch("West Branch")
// const sunBranch = new Branch("Sun Branch")
// const customer1 = new Customer("John", 1)
// const customer2 = new Customer("Anna", 2)
// const customer3 = new Customer("John", 3)

// arizonaBank.addBranch(westBranch)
// arizonaBank.addBranch(sunBranch)
// arizonaBank.addBranch(westBranch) 

// arizonaBank.findBranchByName("bank")
// arizonaBank.findBranchByName("sun")

// arizonaBank.addCustomer(westBranch, customer1)
// arizonaBank.addCustomer(westBranch, customer3)
// arizonaBank.addCustomer(sunBranch, customer1)
// arizonaBank.addCustomer(sunBranch, customer2)

// arizonaBank.addCustomerTransaction(westBranch, customer1.getId, 3000)
// arizonaBank.addCustomerTransaction(westBranch, customer1.getId, 2000)
// arizonaBank.addCustomerTransaction(westBranch, customer2.getId, 3000)

// customer1.addTransactions(-1000)
// console.log(customer1.getBalance())
// console.log(arizonaBank.listCustomers(westBranch, true))
// console.log(arizonaBank.listCustomers(sunBranch,true))

