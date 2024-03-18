import { Model, DataTypes, Op } from 'sequelize';
import { sequelize } from '../config';


export interface AccountAttributes {
  id: string
  name: string
  type: Type
};

export type Type = 'deposit' | 'checking' | 'credit card'


export class Account extends Model<AccountAttributes> {
  declare id: string
  declare name: string
  declare type: Type

}

Account.init({
  // Model attributes are defined here
  id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Account' // We need to choose the model name
});