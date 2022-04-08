class Cliente{
    nome
    cpf
}

class ContaCorrente{
    agencia
    saldo

    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor
        }
    }

    depositar(valor){
        if(valor > 0){
            this.valor += valor
        }
    }
}

const cliente1 = new Cliente()
cliente1.nome = "Ricardo"
cliente1.cpf = 11111325456

const cliente2 = new Cliente()
cliente2.nome = "Alice"
cliente2.cpf = 21111325432

const contaCorrenteRicardo = new ContaCorrente()
contaCorrenteRicardo.saldo = 0
contaCorrenteRicardo.agencia = 0001

console.log(contaCorrenteRicardo.saldo)
contaCorrenteRicardo.depositar(1000)
contaCorrenteRicardo.depositar(130)
contaCorrenteRicardo.depositar(87)
contaCorrenteRicardo.sacar(2000)
console.log(contaCorrenteRicardo.saldo)

console.log(cliente1, "\n", cliente2)

