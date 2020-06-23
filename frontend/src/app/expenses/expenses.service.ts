import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { environment } from '../../environments/environment';
import { Expense } from './expense.model';

const BACKEND_URL = `${environment.apiUrl}/expense`;

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  private expenses: Expense[] = [];
  private expensesUpdated = new Subject<{ expenses: Expense[] }>();

  constructor(private http: HttpClient, private router: Router) { }

  getExpenses() {
    this.http.get<{ message: string; expenses: any; }>(BACKEND_URL)
      .pipe(
        map(expenseData => {
          return {
            expenses: expenseData.expenses.map(expense => {
              return {
                id: expense._id,
                expenseName: expense.expenseName,
                expenseAmount: expense.expenseAmount,
                expenseDate: expense.expenseDate,
              };
            })
          };
        })
      )
      .subscribe(transformedExpenseData => {
        this.expenses = transformedExpenseData.expenses;
        this.expensesUpdated.next({ expenses: [...this.expenses] });
      });
  }

  getExpenseUpdateListener() {
    this.expensesUpdated.asObservable();
  }

  addExpense(expenseName: string, expenseAmount: number, expenseDate: Date) {
    const expenseData = new FormData();
    expenseData.append('expenseName', expenseName);
    expenseData.append('expenseAmount', expenseAmount.toString());
    expenseData.append('expenseDate', expenseDate.toISOString());

    this.http.post<{ message: string, expense: Expense }>(BACKEND_URL, expenseData)
      .subscribe(responseData => {
        this.router.navigate(['/']);
      });
  }

  updateExpense(id: string, expenseName: string, expenseAmount: number, expenseDate: Date) {
    let expenseData: Expense | FormData;
    expenseData = {
      id,
      expenseName,
      expenseAmount,
      expenseDate
    };

    this.http.put(`${BACKEND_URL}/${id}`, expenseData)
      .subscribe(response => {
        this.router.navigate(['/']);
      });
  }

  deleteExpense(expenseId: string) {
    return this.http.delete(`${BACKEND_URL}/${expenseId}`);
  }
}
