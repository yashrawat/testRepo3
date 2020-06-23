const Expense = require('../models/expense-model');

exports.createExpense = (req, res, next) => {
    // Expense.create();
    const expense = new Expense({
        expenseName: req.body.expenseName,
        expenseAmount: req.body.expenseAmount,
        expenseDate: req.body.expenseDate
    });

    expense.save()
        .then(createdExpense => {
            res.status(201).json({
                message: 'Expense added successfully',
                expense: {
                    id: createdExpense._id,
                    expenseName: createdExpense.expenseName,
                    expenseAmount: createdExpense.expenseAmount,
                    expenseDate: createdExpense.expenseDate
                }
            });
        })
        .catch(error => {
            res.status(500).json({
                message: `Creation of expense failed. ${error}`
            });
        });
};

exports.fetchAllExpenses = (req, res, next) => {
    const expense = Expense.find();

    expense
        .then(fetchedExpenses => {
            res.status(200).json({
                message: 'Expenses fetched successfully',
                expenses: fetchedExpenses
            });
        })
        .catch(error => {
            res.status(500).json({
                message: `Fetching expenses failed. ${error}`
            });
        });
};

// exports.fetchOneExpenses = (req, res, next) => {
//     Expense.findById();
// };

exports.updateExpense = (req, res, next) => {
    const expense = new Expense({
        _id: req.body.id,
        expenseName: req.body.expenseName,
        expenseAmount: req.body.expenseAmount,
        expenseDate: req.body.expenseDate
    });
    
    expense.updateOne({ _id: req.params.id }, expense)
        .then(updatedExpense => {
            res.status(200).json({
                message: 'Expense updated successfully'
            });
        })
        .catch(error => {
            res.status(500).json({
                message: `Expense could not be updated. ${error}`
            });
        });
};

exports.deleteExpense = (req, res, next) => {
    const expense = Expense.deleteOne({ _id: req.params.id });

    expense
        .then(deletedExpense => {
            res.status(200).json({
                message: 'Deleted expense successfully'
            });
        })
        .catch(error => {
            res.status(500).json({
                message: `Expense could not be fetched. ${error}`
            });
        });
};