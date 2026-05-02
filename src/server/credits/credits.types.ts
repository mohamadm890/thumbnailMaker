
  
  export type CreditTransactionType =
    | "ADD"
    | "DEDUCT"
    | "REFUND";
  
  export type CreditTransaction = {
    userId: string;
    type: CreditTransactionType;
    amount: number;
    createdAt: Date;
  };