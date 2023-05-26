import { TransactionDetailGetDto } from "./transaction-detail-get-dto";

export class TransactionGetDto {
    idPerson:number = 0;
    id:number = 0;
    date:Date = new Date();
    totalPrice:number = 0;
    idPaymentMethod:number = 0;
    transactionDetailGetDTOS:TransactionDetailGetDto[] = [];
                
}
