import { uuid } from "uuidv4"
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
    amount: (Math.random() * 10000) - 5000,
    description: 'transaction',
    accountId: getAccountId()
  },
  {
    id: uuid(),
    date: generateDate(),
    amount: (Math.random() * 10000) - 5000,
    description: 'transaction',
    accountId: getAccountId()
  },
  {
    id: uuid(),
    date: generateDate(),
    amount: (Math.random() * 10000) - 5000,
    description: 'transaction',
    accountId: getAccountId()
  },
  {
    id: uuid(),
    date: generateDate(),
    amount: (Math.random() * 10000) - 5000,
    description: 'transaction',
    accountId: getAccountId()
  },
  {
    id: uuid(),
    date: generateDate(),
    amount: (Math.random() * 10000) - 5000,
    description: 'transaction',
    accountId: getAccountId()
  },
  {
    id: uuid(),
    date: generateDate(),
    amount: (Math.random() * 10000) - 5000,
    description: 'transaction',
    accountId: getAccountId()
  },
  {
    id: uuid(),
    date: generateDate(),
    amount: (Math.random() * 10000) - 5000,
    description: 'transaction',
    accountId: getAccountId()
  },
  {
    id: uuid(),
    date: generateDate(),
    amount: (Math.random() * 10000) - 5000,
    description: 'transaction',
    accountId: getAccountId()
  },
  {
    id: uuid(),
    date: generateDate(),
    amount: (Math.random() * 10000) - 5000,
    description: 'transaction',
    accountId: getAccountId()
  },
  {
    id: uuid(),
    date: generateDate(),
    amount: (Math.random() * 10000) - 5000,
    description: 'transaction',
    accountId: getAccountId()
  },
  {
    id: uuid(),
    date: generateDate(),
    amount: (Math.random() * 10000) - 5000,
    description: 'transaction',
    accountId: getAccountId()
  },
  {
    id: uuid(),
    date: generateDate(),
    amount: (Math.random() * 10000) - 5000,
    description: 'transaction',
    accountId: getAccountId()
  },
  {
    id: uuid(),
    date: generateDate(),
    amount: (Math.random() * 10000) - 5000,
    description: 'transaction',
    accountId: getAccountId()
  },
  {
    id: uuid(),
    date: generateDate(),
    amount: (Math.random() * 10000) - 5000,
    description: 'transaction',
    accountId: getAccountId()
  }
]