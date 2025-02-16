import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../budget.service';
import { BudgetItem } from '../models/budget-item.model';
import { ExpenseItem } from '../models/expense-item.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-budget-overview',
  imports: [CommonModule,FormsModule],
  templateUrl: './budget-overview.component.html',
  styleUrls: ['./budget-overview.component.css']
})
export class BudgetOverviewComponent implements OnInit {
  budgetItems: BudgetItem[] = [];
  expenseItems: ExpenseItem[] = [];

  constructor(private budgetService: BudgetService) { }

  ngOnInit(): void {
    this.budgetItems = this.budgetService.getBudgetItems();
    this.expenseItems = this.budgetService.getExpenseItems();
  }

  getTotalBudget(): number {
    return this.budgetService.getTotalBudget();
  }

  getTotalExpenses(): number {
    return this.budgetService.getTotalExpenses();
  }

  getRemainingBudget(): number {
    return this.budgetService.getRemainingBudget();
  }
}
