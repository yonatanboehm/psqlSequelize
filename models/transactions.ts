import { Model, DataTypes, Op, ForeignKey } from 'sequelize';
import { sequelize } from '../config';
import { Account } from './accounts';

export interface TransactionAttributes {
  id: string
  date: Date
  amount: number
  description: string
  accountId: string
};


export class Transaction extends Model<TransactionAttributes> {
  declare id: string
  declare date: Date
  declare amount: number
  declare description: string
  declare accountId: ForeignKey<Account['id']>

  static async findAllByDateRange (startDate: Date, endDate: Date) {
    const transactionsBetweenDates = await Transaction.findAll({
      where: {
        date: {
          [Op.between]: [startDate, endDate]
        }
      }
    }) 
    return transactionsBetweenDates
  }
}

Transaction.init({
  // Model attributes are defined here
  id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  accountId: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Transaction' // We need to choose the model name
});