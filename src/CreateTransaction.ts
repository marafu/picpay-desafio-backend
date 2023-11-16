export class CreateTransaction {
    constructor(){}
    async execute(input: Input) {
        return {
            message: "transaction successfully"
        }
    }
}

type Input = {
    value: Number
    payee: string
}