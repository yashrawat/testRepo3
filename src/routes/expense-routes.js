const express = require('express');

const router = express.Router();
const expenseController = require('../controllers/expense-controller');

router.post('/', expenseController.createExpense);

router.get('/', expenseController.fetchAllExpenses);

router.put('/:expenseId', expenseController.updateExpense);

router.delete('/:expenseId', expenseController.deleteExpense);

module.exports = router;