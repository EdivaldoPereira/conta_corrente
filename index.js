import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
import { ContaPoupanca } from "./ContaPoupanca.js"
import { Conta } from "./Conta.js"

const cliente1 = new Cliente("Ricardo", 11111325456)

const contaCorrente = new Conta(0, cliente1, 1001)
contaCorrente.depositar(500)
contaCorrente.sacar(100)

const contaPoupanca = new Conta(50, cliente1, 1001)

console.log(contaCorrente)
console.log(contaPoupanca)


