import { Injectable } from '@angular/core';
import { BudgetItem } from './models/budget-item.model';
import { ExpenseItem } from './models/expense-item.model';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  private budgetItems: BudgetItem[] = [];
  private expenseItems: ExpenseItem[] = [];

  constructor() { }

  getBudgetItems(): BudgetItem[] {
    return this.budgetItems;
  }

  getExpenseItems(): ExpenseItem[] {
    return this.expenseItems;
  }

  addBudgetItem(item: BudgetItem): void {
    this.budgetItems.push(item);
  }

  addExpenseItem(item: ExpenseItem): void {
    this.expenseItems.push(item);
  }

  getTotalBudget(): number {
    return this.budgetItems.reduce((total, item) => total + item.amount, 0);
  }

  getTotalExpenses(): number {
    return this.expenseItems.reduce((total, item) => total + item.amount, 0);
  }

  getRemainingBudget(): number {
    return this.getTotalBudget() - this.getTotalExpenses();
  }
}
