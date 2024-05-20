import inquirer from "inquirer"

interface userAnswers{
    userID: string
    userPIN: number
    accountType: string
    transactionType: string
    amount: number
}

 async function startATMconversation() {
    console.log("Wellcome to MCB");

const answers: userAnswers = await inquirer.prompt([
    {
        type: "input",
        name: "userID",
        message: "Please Enter your ID Name"
    },

    {
        type: "number",
        name: "userPIN",
        message: "Please Enter your PIN"
    },

    {
        type: "list",
        name: "accountType",
        choices: ["Current", "Saving"],
        message: "Select your accountType"
    },

    {
        type: "list",
        name: "transactionType",
        choices: ["Fast withdrawl", "Normal withdrawl"],
        message: "Select your transactionType",
        when(answers) {
            return answers.accountType;
        }
    },

    {
        type: "list",
        name: "amount",
        choices: ["1000", "2000", "5000", "10000", "20000", "50000"],
        message: "Select your amount",
        when(answers) {
            return answers.transactionType == "Fast withdrawl"
        }
    },

    {
        type: "number",
        name: "amount",
        message: "Enter your amount",
        when(answers) {
            return answers.transactionType == "Normal withdrawl";
        }
    },
])

if(answers.userID && answers.userPIN) {
    console.log("Proccessing your request ....");
    const  balance = Math.floor(Math.random() *1000000000)
    console.log("Your currrent balance is", balance.toLocaleString());
    const enterAmount = answers.amount

    if(balance >= enterAmount) {
        const remainingBalance = balance - enterAmount
         console.log("Transaction successfully! Your remaining balance is:" , remainingBalance.toLocaleString());
        
    }
    else{
        console.log("Sorry! Your balance is exceeds your current balance");
        
    }
}
 
}
startATMconversation();