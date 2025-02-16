import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component.spec';
import { BudgetInputComponent } from './budget-input/budget-input.component';
import { ExpenseInputComponent } from './expense-input/expense-input.component';
import { BudgetOverviewComponent } from './budget-overview/budget-overview.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule,FormsModule,HeaderComponent,BudgetInputComponent,ExpenseInputComponent,BudgetOverviewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Budget-Planner';
}
