// Simple Abstraction Example

class ATM {
  constructor() {
    this.balance = 1000;
  }

  // Complex internal operations (hidden from user)
  #validateCard() {
    console.log("Validating card...");
    return true;
  }

  #checkPIN() {
    console.log("Checking PIN...");
    return true;
  }

  #connectToBank() {
    console.log("Connecting to bank servers...");
    return true;
  }

  #updateDatabase(amount) {
    console.log("Updating bank database...");
    this.balance -= amount;
  }

  #dispenseCash(amount) {
    console.log("Dispensing cash...");
    return `$${amount} dispensed`;
  }

  // Simple public interface (what user sees)
  withdrawMoney(amount) {
    // All complexity hidden behind this simple method
    this.#validateCard();
    this.#checkPIN();
    this.#connectToBank();

    if (amount > this.balance) {
      return "Insufficient funds";
    }

    this.#updateDatabase(amount);
    return this.#dispenseCash(amount);
  }

  checkBalance() {
    return `Your balance: $${this.balance}`;
  }
}

// User interaction - simple and clean
const atm = new ATM();

console.log(atm.withdrawMoney(100));
// Output:
// Validating card...
// Checking PIN...
// Connecting to bank servers...
// Updating bank database...
// Dispensing cash...
// $100 dispensed

console.log(atm.checkBalance());
// Output: Your balance: $900
