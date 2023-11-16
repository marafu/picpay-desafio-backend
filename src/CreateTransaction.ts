import { InvalidValueTransactionError } from "./InvalidValueTransactionError"

export class CreateTransaction {
    constructor(){}
    async execute(input: Input) {

        if(input.value <= 0) throw new InvalidValueTransactionError("Invalid value for transaction")

        return {
            message: "transaction successfully"
        }
    }
}

type Input = {
    value: number
    payee: string
}