import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./Conta/ContaCorrente.js"
import { ContaPoupanca } from "./Conta/ContaPoupanca.js"
import { ContaSalario } from "./Conta/ContaSalario.js"


const cliente1 = new Cliente("Ricardo", 11111325456)

const contaCorrente = new ContaCorrente(0, cliente1, 1001)
contaCorrente.depositar(500)
contaCorrente.sacar(100)

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001)
const contaSalario = new ContaSalario(cliente1)
contaSalario.depositar(100)
contaSalario.sacar(10)

console.log(contaCorrente)
console.log(contaPoupanca)

console.log(contaSalario)
