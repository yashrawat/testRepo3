import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './utils/error/error.component';
import { HeaderComponent } from './utils/header/header.component';
import { PagenotfoundComponent } from './utils/pagenotfound/pagenotfound.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExpensesListComponent } from './expenses/expenses-list/expenses-list.component';
import { ExpenseCreateComponent } from './expenses/expense-create/expense-create.component';
import { AngularMaterialModule } from './utils/angular-material.module';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    HeaderComponent,
    PagenotfoundComponent,
    ExpensesListComponent,
    ExpenseCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
