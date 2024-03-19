import { v4 as uuid } from "uuid"
import { TransactionAttributes } from "../models/transactions"
import { accounts } from "./accounts"

const getAccountId = (): string => {
  return accounts[Math.floor(Math.random()*3)].id
}

const generateDate = (): Date => {
  const randomDate: Date = new Date()
  randomDate.setDate(randomDate.getDate() - Math.random()*3000)
  
  return randomDate
}

export const transactions: TransactionAttributes[] = [
  {
    id: uuid(),
    date: generateDate(),
    amount: Number(((Math.random() * 10000) - 5000).toFixed(2)),
    description: 'transaction',
    accountId: getAccountId()
  },
  {
    id: uuid(),
    date: generateDate(),
    amount: Number(((Math.random() * 10000) - 5000).toFixed(2)),
    description: 'transaction',
    accountId: getAccountId()
  },
  {
    id: uuid(),
    date: generateDate(),
    amount: Number(((Math.random() * 10000) - 5000).toFixed(2)),
    description: 'transaction',
    accountId: getAccountId()
  },
  {
    id: uuid(),
    date: generateDate(),
    amount: Number(((Math.random() * 10000) - 5000).toFixed(2)),
    description: 'transaction',
    accountId: getAccountId()
  },
  {
    id: uuid(),
    date: generateDate(),
    amount: Number(((Math.random() * 10000) - 5000).toFixed(2)),
    description: 'transaction',
    accountId: getAccountId()
  },
  {
    id: uuid(),
    date: generateDate(),
    amount: Number(((Math.random() * 10000) - 5000).toFixed(2)),
    description: 'transaction',
    accountId: getAccountId()
  },
  {
    id: uuid(),
    date: generateDate(),
    amount: Number(((Math.random() * 10000) - 5000).toFixed(2)),
    description: 'transaction',
    accountId: getAccountId()
  },
  {
    id: uuid(),
    date: generateDate(),
    amount: Number(((Math.random() * 10000) - 5000).toFixed(2)),
    description: 'transaction',
    accountId: getAccountId()
  },
  {
    id: uuid(),
    date: generateDate(),
    amount: Number(((Math.random() * 10000) - 5000).toFixed(2)),
    description: 'transaction',
    accountId: getAccountId()
  },
  {
    id: uuid(),
    date: generateDate(),
    amount: Number(((Math.random() * 10000) - 5000).toFixed(2)),
    description: 'transaction',
    accountId: getAccountId()
  },
  {
    id: uuid(),
    date: generateDate(),
    amount: Number(((Math.random() * 10000) - 5000).toFixed(2)),
    description: 'transaction',
    accountId: getAccountId()
  },
  {
    id: uuid(),
    date: generateDate(),
    amount: Number(((Math.random() * 10000) - 5000).toFixed(2)),
    description: 'transaction',
    accountId: getAccountId()
  },
  {
    id: uuid(),
    date: generateDate(),
    amount: Number(((Math.random() * 10000) - 5000).toFixed(2)),
    description: 'transaction',
    accountId: getAccountId()
  },
  {
    id: uuid(),
    date: generateDate(),
    amount: Number(((Math.random() * 10000) - 5000).toFixed(2)),
    description: 'transaction',
    accountId: getAccountId()
  },
  {
    id: uuid(),
    date: generateDate(),
    amount: Number(((Math.random() * 10000) - 5000).toFixed(2)),
    description: 'transaction',
    accountId: getAccountId()
  },
  {
    id: uuid(),
    date: generateDate(),
    amount: Number(((Math.random() * 10000) - 5000).toFixed(2)),
    description: 'transaction',
    accountId: getAccountId()
  },
  {
    id: uuid(),
    date: generateDate(),
    amount: Number(((Math.random() * 10000) - 5000).toFixed(2)),
    description: 'transaction',
    accountId: getAccountId()
  },
  {
    id: uuid(),
    date: generateDate(),
    amount: Number(((Math.random() * 10000) - 5000).toFixed(2)),
    description: 'transaction',
    accountId: getAccountId()
  },
  {
    id: uuid(),
    date: generateDate(),
    amount: Number(((Math.random() * 10000) - 5000).toFixed(2)),
    description: 'transaction',
    accountId: getAccountId()
  }
]