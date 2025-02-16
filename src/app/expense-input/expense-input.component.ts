import { Component } from '@angular/core';
import { BudgetService } from '../budget.service';
import { ExpenseItem } from '../models/expense-item.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-expense-input',
  imports : [FormsModule],
  templateUrl: './expense-input.component.html',
  styleUrls: ['./expense-input.component.css']
})
export class ExpenseInputComponent {
  description: string = '';
  category: string = '';
  amount: number | null = null;
  date: Date = new Date(); // Optional, voreingestelltes Datum

  constructor(private budgetService: BudgetService) { }

  addExpenseItem() {
    if (this.description && this.category && this.amount !== null) {
      const newItem: ExpenseItem = {
        description: this.description,
        category: this.category,
        amount: this.amount,
        date: this.date // oder new Date() für aktuelles Datum bei Klick
      };
      this.budgetService.addExpenseItem(newItem);
      this.description = '';
      this.category = '';
      this.amount = null;
      this.date = new Date(); // Datum zurücksetzen, falls wiederverwendet
    } else {
      alert('Bitte Beschreibung, Kategorie und Betrag eingeben.');
    }
  }
}
