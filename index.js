import {Cliente} from "./Cliente.js"
import {ContaCorrente} "./ContaCorrente.js"

const cliente1 = new Cliente()
cliente1.nome = "Ricardo"
cliente1.cpf = 11111325456

const cliente2 = new Cliente()
cliente2.nome = "Alice"
cliente2.cpf = 21111325432

const contaCorrenteRicardo = new ContaCorrente()
contaCorrenteRicardo._saldo = 0
contaCorrenteRicardo.agencia = 1001

contaCorrenteRicardo.depositar(1874)

const valorSacado = contaCorrenteRicardo.sacar(200)
console.log(valorSacado)

console.log(contaCorrenteRicardo)

