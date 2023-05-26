import { TransactionDetailDto } from "./transaction-detail-dto";

export class TransactionDto {
    idPerson:number = 0;
    idPaymentMethod:number = 0;
    transactionDetailDTOS: TransactionDetailDto[] = [];
}
