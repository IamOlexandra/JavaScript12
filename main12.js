const user = {
    hobby: "skydiving",
    premium: false,
    mood: "happy",
};
const {hobby, premium, mood} = user;
console.log(premium);
const employeesWork = {
    nina: 23,
    stella: 18,
    mark: 26,
    mishelle: 15,
    john: 22,
    michael: 0,
}; //Не змогла розформувати через ключі, що повторюються
const employeesSalary = {
    nina: 66000,
    stella: 66000,
    mark: 124000,
    mishelle: 32000,
    john: 66000,
    michael: 18000,
}; //Те саме
const employees = [
    {
        name: "Nina",
        workThisMonth: employeesWork.nina,
        salary: employeesSalary.nina,
        monthsWorked: 48,
    },
    {
        name: "Stella",
        workThisMonth: employeesWork.stella,
        salary: employeesSalary.stella,
        monthsWorked: 47,
    },
    {
        name: "Mark",
        workThisMonth: employeesWork.mark,
        salary: employeesSalary.mark,
        monthsWorked: 26,
    },
    {
        name: "Mishelle",
        workThisMonth: employeesWork.mishelle,
        salary: employeesSalary.mishelle,
        monthsWorked: 3,
    },
    {
        name: "John",
        workThisMonth: employeesWork.john,
        salary: employeesSalary.john,
        monthsWorked: 23,
    },
    {
        name: "Michael",
        workThisMonth: employeesWork.michael,
        salary: employeesSalary.michael,
        monthsWorked: 1,
    },
];
const [nina, stella, mark, mishelle, john, michael] = employees;
console.log(michael);
const products = [
    {
        name: "Cup of noodles",
        price: 39,
        amount: 5,
    },
    {
        name: "Coca cola 1l",
        price: 45,
        amount: 2,
    },
    {
        name: "Pepsi cola 1l",
        price: 35,
        amount: 2,
    },
];
const [noodles, cocacola, pepsicola] = products;
console.log(noodles);

/*
 * Типів транзацкій всього два.
 * Можна покласти або зняти гроші з рахунку.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Кожна транзакція - це об'єкт з властивостями: id, type і amount
 */
const account = {
    // Поточний баланс рахунку
    balance: 0,

    // Історія транзакцій

    transactions: [],
  /*
   * Метод створює і повертає об'єкт транзакції.
   * Приймає суму і тип транзакції.
   */

    createTransaction(amount, type) {
        this.transactions.push({
            id: this.transactions.length + 1,
            type,
            amount,
        });
    },
  /*
   * Метод відповідає за додавання суми до балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій
   */
    deposit(amount) {
        this.balance += amount;
        this.createTransaction(amount, "deposit");
    },

  /*
   * Метод відповідає за зняття суми з балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій.
   *
   * Якщо amount більше, ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливо, недостатньо коштів.
   */
    withdraw(amount) {
        this.balance -= amount;
        this.createTransaction(amount, "withdraw");
    },

  /*
   * Метод повертає поточний баланс
   */
    getBalance() {
        return this.balance;
    },
  /*
   * Метод шукає і повертає об'єкт транзакції по id
   */
    getTransactionDetails(id) {
        for(let transaction of this.transactions) {
            if(transaction.id === id) {
                return transaction;
            }
        }
    },

  /*

   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
    getTransactionTotal(type) {
        let totalAmount = 0;
        for(let transaction of this.transactions) {
            if(transaction.type === type) {
                totalAmount += transaction.amount;
            }
        }
        return totalAmount;
    },
};
account.deposit(42);
account.withdraw(39);
account.withdraw(2);
console.log(account.getBalance());
console.log(account.getTransactionDetails(2));
console.log(account.getTransactionTotal("withdraw"));