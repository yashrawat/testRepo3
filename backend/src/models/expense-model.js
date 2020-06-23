const mongoose = require('mongoose');
// const uniqueValidator = require('mongoose-unique-validator');

const expenseSchema = mongoose.Schema({
    expenseName: { type: String, required: true },
    expenseAmount: { type: Number, required: true },
    expenseDate: { type: Date, required: true }
});

module.exports = mongoose.model('Expense', expenseSchema);