import { TransactionDetailDto } from "./transaction-detail-dto";

export class TransactionDto {
    idPerson:string = "";
    idPaymentMethod:number = 0;
    transactionDetailDTOS: TransactionDetailDto[] = [];
}
