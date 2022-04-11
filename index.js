import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
import { ContaPoupanca } from "./ContaPoupanca.js"

const cliente1 = new Cliente("Ricardo", 11111325456)

const conta1 = new ContaCorrente(1001, cliente1)
conta1.depositar(500)
conta1.sacar(100)

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001)

console.log(conta1)
console.log(contaPoupanca)
console.log("O número total de contas é ", ContaCorrente.numeroDeContas)

