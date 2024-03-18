import { sequelize } from "./config";
import { Transaction } from "./models/transactions";
import { Account } from "./models/accounts";
import { transactions } from "./data/transactions";
import { accounts } from "./data/accounts";

try {
  (async () => {
    await sequelize.sync()
    console.log('++++++++++++++++++')
    for (const account of accounts) {
      await Account.create(account)
    }
    for (const transaction of transactions) {
      await Transaction.create(transaction)
    }

    console.log('--------------------');
    console.log('Transactions created');
    console.log('--------------------');

    // const startDate: Date = new Date('2011-10-10')
    // const endDate: Date = new Date('2022-10-10')

    // const filteredTransactions = await Transaction.findAllByDateRange(startDate, endDate)
    // filteredTransactions.map(transaction => {
    //   console.log(transaction.dataValues)
    // })

  })()
} catch (error: unknown) {
  if (error instanceof Error) {
    console.error('Error: ' + error.message)
  } else {
    console.error('Error: ' + error)
  }
}