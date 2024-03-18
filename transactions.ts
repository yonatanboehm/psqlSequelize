import { Model, Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('postgresql://yonatanboehm@localhost:5432/general');

interface TransactionAttributes {
  date: Date
  amount: number
  description: string
};

const transactions: TransactionAttributes[] = [
  {
    date: new Date(2001, 1, 19),
    amount: 7000,
    description: 'birthday'
  }, 
  {
    date: new Date(2023, 6, 11),
    amount: 2,
    description: 'Panax'
  },
  {
    date: new Date(2012, 12, 21),
    amount: 666,
    description: 'End of the world'
  }
] 

// we're telling the Model that 'id' is optional
// when creating an instance of the model (such as using Model.create()).

class Transaction extends Model<TransactionAttributes> {
  declare date: Date;
  declare amount: number;
  declare description: string;
}

Transaction.init({
  // Model attributes are defined here
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
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Transaction' // We need to choose the model name
});

try {
  async function createNewTransactions() {
    await sequelize.sync({ force: true })
    transactions.forEach(async transaction => {
      await Transaction.create(transaction)
    })
    console.log('--------------------');
    console.log('Transactions created');
    console.log('--------------------');
  }
  createNewTransactions();
} catch (error: unknown) {
  if (error instanceof Error) {
    console.error('Error: ' + error.message)
  } else {
    console.error('Error: ' + error)
  }
}
