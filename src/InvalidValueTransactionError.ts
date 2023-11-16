export class InvalidValueTransactionError extends Error {
    constructor(message: string){
        super()
        this.message = message
        this.name = "INVALID_VALUE_TRANSACTION_ERROR"
    }
}