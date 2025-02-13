const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  
  userName: {
    type: String,
    required: true,
  },

  fullName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true, 
  },

  password: {
    type: String,
    required: true,
  },

  phoneNumber: {
    type: String,
    required: true,
  },

  country: {
    type: String,
    required: true,
  },
  
  referralCode: {
    type: String,
  },

  token: {
    type: String,
    required: true,
  },

  accountBalance: {
    type: Number,
    default: 0.00
  },

  totalInvestment: {
    type: Number,
    default: 0.00
  },

  totalProfit: {
    type: Number,
    default: 0.00
  },

  bonus: {
    type: Number,
    default: 0.00
  },

  tradingAccounts: {
    type: Number,
    default: 0.00
  },

  ref: {
    type: String,
    default: 0.00
  },

totalDeposit: {
    type: Number,
    default: 0.00
  },

totalWithdrawal: {
    type: Number,
    default: 0.00
  },

  status: {
    type: Boolean,
    default: false,
  },

  withdrawCode: {
    type: String,
  },

  verify: {
    type: Boolean,
    default: false,
  },

  isAdmin: {
    type: Boolean,
    default: false,
  },
  admin:{
     type: mongoose.SchemaTypes.ObjectId,
     ref: "admin"
  },

  withdrawSetting: [
    {
      bankName: String
    },
    {
      accountName: String
    },
    {
      accountNumber: String
    },
    {
      swiftCode: String
    },
    {
      bitcoin: String
    },
    {
      ethereum: String
    },
    {
      litecoin: String
    },

],

  investmentPlan:[{
      type: mongoose.SchemaTypes.ObjectId,
      ref: "userplan",
  }],

  Transactions: {
    deposits: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'deposit'
    }],
    withdrawals: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'withdraw'
    }],
    investments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Invest'
    }],
    interests: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Interest'
    }],
},

}, {timestamps: true});

module.exports = User = mongoose.model('User', UserSchema )

