class BankAccount {
	constructor(accountNumber, balance) {
		this.accountNumber = accountNumber;
		this.balance = balance;
	}

	getBalance() {
		console.log(
			`Account# ${this.accountNumber}, Your account balance is $${this.balance}`
		);
	}

	deposit(amount) {
		this.balance += amount;
		console.log(`Deposited $${amount}. New balance is ${this.balance}`);
	}

	withdraw(amount) {
		if (amount > this.balance) {
			console.log(`Insufficient Funds.`);
		} else {
			this.balance -= amount;
			console.log(`$${amount} withdrawn, New Balance is $${this.balance}`);
		}
	}
}

const mattsAccount = new BankAccount(1, 1000);

mattsAccount.withdraw(999);
