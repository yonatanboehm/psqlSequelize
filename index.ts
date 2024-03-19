import { sequelize } from "./config";
import { Account } from "./models/accounts";
import { Transaction } from "./models/transactions";
import { transactions } from "./data/transactions";
import { accounts } from "./data/accounts";
import express from "express";

const app = express()

const createAccounts = async () => {
  await Account.bulkCreate(accounts)
}

const createTransactions = async () => {
  await Transaction.bulkCreate(transactions)
}

try {
  (async () => {
    await sequelize.sync({ force: true })
    console.log('++++++++++++++++++')

    await createAccounts()

    console.log('--------------------');
    console.log('--Accounts created--');
    console.log('--------------------');

    await createTransactions()

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

// simple server to display JSON

const port = 3000

app.get('/', async (req, res) => {
  const all = await Account.findAll({
    attributes: { exclude: ['id', 'createdAt', 'updatedAt'] },
    include: [{
      model: Transaction,
      as: 'transactions',
      attributes: { exclude: ['id', 'accountId', 'createdAt', 'updatedAt'] }
    }],
    nest: true
  })
  res.json(all)
})

app.listen(port)
