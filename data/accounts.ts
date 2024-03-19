import { v4 as uuid } from "uuid"
import { AccountAttributes } from "../models/accounts"

export const accounts: AccountAttributes[] = [
  {
    id: uuid(),
    name: 'main',
    type: 'checking'
  }, 
  {
    id: uuid(),
    name: 'savings',
    type: 'deposit'
  },
  {
    id: uuid(),
    name: 'visa card',
    type: 'credit card'
  }
]