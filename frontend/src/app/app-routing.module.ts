import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpensesListComponent } from './expenses/expenses-list/expenses-list.component';
import { ExpenseCreateComponent } from './expenses/expense-create/expense-create.component';
import { PagenotfoundComponent } from './utils/pagenotfound/pagenotfound.component';


const routes: Routes = [
  { path: 'expenses-list', component: ExpensesListComponent },
  { path: 'expense-create', component: ExpenseCreateComponent },
  { path: 'expense-create/:expenseId', component: ExpenseCreateComponent },
  { path: '', redirectTo: 'expenses-list', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
