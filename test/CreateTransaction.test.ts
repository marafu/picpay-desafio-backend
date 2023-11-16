import { CreateTransaction } from "../src/CreateTransaction";

test("Criar uma transação", async function() {
    const sut = new CreateTransaction();

    const input = {
        value: 100.0,
        payee: "Maria"
    }

    const result = await sut.execute(input)

    expect(result.message).toBe("transaction successfully");
})