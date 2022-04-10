import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Ricardo", 11111325456)

const cliente2 = new Cliente("Alice", 21111325432)

const conta1 = new ContaCorrente(1001, cliente1)
conta1.depositar(500)

const conta2 = new ContaCorrente(102, cliente2)

conta1.transferir(200, conta2)

console.log(conta1)
console.log(conta2)

