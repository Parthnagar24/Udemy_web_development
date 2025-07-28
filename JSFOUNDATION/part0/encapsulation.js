class BankAccount {
  #balance = 0; // Private field (ES2022)

  constructor(accountHolder) {
    this.accountHolder = accountHolder;
  }

  // Public methods to interact with private data
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      return `Deposited $${amount}. New balance: $${this.#balance}`;
    }
    return "Invalid amount";
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      return `Withdrawn $${amount}. New balance: $${this.#balance}`;
    }
    return "Insufficient funds or invalid amount";
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount("John Doe");
console.log(account.deposit(100)); // "Deposited $100. New balance: $100"
console.log(account.getBalance()); // 100
// console.log(account.#balance); // SyntaxError - private field
