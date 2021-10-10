class Bank {

    constructor(name, accountNo,bal){
        this.fullName = name,
        this.accNo = accountNo,
        this.transactions = []
        this.bal = bal
    }

    depoist(amount){

        this.transactions.push(amount)
        this.bal = this.bal + amount
        console.log(`The amount of ${amount } added to you account`)
        console.log(`your current bal is = ${this.bal}`)
        return this.bal

    }

    withdraw(amount){
        if(amount < this.bal){
            this.transactions.push(-amount)
            this.bal = this.bal - amount
            console.log(`The amount of ${amount } deducted from you account`)
            console.log(`your current bal is = ${this.bal}`)
            return
        }
        else{
            console.log('In sufficient bal to withdraw')
        }

    }

}

let amola = new Bank ('Amol',1,1000)

amola.depoist(2000)
amola.withdraw(1500)
amola.depoist(4000)
amola.withdraw(2000)



