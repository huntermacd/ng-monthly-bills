export interface Bill {
  id: number;
  dueDate: number;
  description: string;
  payee: string;
  amountDue: number;
  paid: boolean;
}
