{
    class BankAccount {

        public readonly id: number;
        private _balance: number; 
        public name: string; 

        constructor(id: number, balance: number, name: string){

            this.id = id; 
            this._balance = balance; 
            this.name = name; 
        }
        

        // addDeposit(amount:number):void {

        //     this._balance = this._balance + amount; 
        // }

        // setter

        set deposit (amount: number){

            this._balance = this._balance + amount; 

        }


        // getDeposit():number {

        //     return this._balance; 

        // }

        // getter
        get balance():number{

            return this._balance; 
        }

    }


    const goriberAccount = new BankAccount(2001, 50, 'Bulbul');


    // Property 'balance' is private and only accessible within class 'BankAccount'.ts(2341)
    // goriberAccount.balance = 2; 

    // using access modifier

        // goriberAccount.addDeposit(50); 

        // console.log("Mr Gorib bubul's balance is", goriberAccount.getDeposit()); 


    const mamunAccount = new BankAccount(4001, 60, 'Mamun'); 

    // mamunAccount.addDeposit(60); 
    // console.log("Mamun's Balance", mamunAccount.getDeposit());


    // using getter and setter 


    goriberAccount.deposit = 50; 

    console.log(goriberAccount.balance)

  
}