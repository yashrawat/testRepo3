const express = require('express');

const router = express.Router();
const expenseController = require('../controllers/expense-controller');

router.post('/expense/', expenseController.createExpense);

router.get('/expense/', expenseController.fetchAllExpenses);

router.put('/expense/:expenseId', expenseController.updateExpense);

router.delete('/expense/:expenseId', expenseController.deleteExpense);

module.exports = router;