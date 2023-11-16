import { CreateTransaction } from "../src/CreateTransaction";
import { InvalidValueTransactionError } from "../src/InvalidValueTransactionError";

test("Criar uma transação", async function() {
    const sut = new CreateTransaction();

    const input = {
        value: 100.0,
        payee: "Maria"
    }

    const result = await sut.execute(input)

    expect(result.message).toBe("transaction successfully");
})

test("Não criar uma transação caso o valor seja menor ou igual a 0 (zero)", function() {
    const sut = new CreateTransaction();

    const input = {
        value: -100.0,
        payee: "Maria"
    }

    expect(async () => await sut.execute(input)).rejects.toThrow(new InvalidValueTransactionError("Invalid value for transaction"))
})