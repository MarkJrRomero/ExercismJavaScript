//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {
    this.account = false;
  }

  open() {
    if (this.account) throw new ValueError();
    else {
      this.account = true;
      this.accountBalance = 0;
    }
  }

  close() {
    if (!this.account) throw new ValueError();
    else this.account = false;
  }

  deposit(money) {
    if (!this.account || money < 0) throw new ValueError();
    else this.accountBalance += money;
  }

  withdraw(money) {
    if (!this.account || money < 0 || money > this.accountBalance) throw new ValueError();
    else this.accountBalance -= money;
  }

  get balance() {
    if (!this.account) throw new ValueError();
    else return this.accountBalance;
  }
}

export class ValueError extends Error {
  constructor() {
    super("Bank account error");
  }
}
