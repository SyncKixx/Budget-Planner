import { Component } from '@angular/core';
import { BudgetService } from '../budget.service';
import { BudgetItem } from '../models/budget-item.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-budget-input',
  imports: [FormsModule],
  templateUrl: './budget-input.component.html',
  styleUrls: ['./budget-input.component.css']
})
export class BudgetInputComponent {
  category: string = '';
  amount: number | null = null;

  constructor(private budgetService: BudgetService) { }

  addBudgetItem() {
    if (this.category && this.amount !== null) {
      const newItem: BudgetItem = {
        category: this.category,
        amount: this.amount
      };
      this.budgetService.addBudgetItem(newItem);
      this.category = '';
      this.amount = null; // Zurücksetzen der Eingabefelder
    } else {
      alert('Bitte Kategorie und Betrag eingeben.'); // Einfache Validierung
    }
  }
}
