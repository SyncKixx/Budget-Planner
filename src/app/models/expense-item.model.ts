export interface ExpenseItem {
    description: string;
    category: string;
    amount: number;
    date: Date; // Optional, um das Datum der Ausgabe zu speichern
  }