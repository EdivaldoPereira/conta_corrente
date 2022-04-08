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
            this.saldo += valor
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

contaCorrenteRicardo.depositar(1874)
contaCorrenteRicardo.sacar(200)

console.log(contaCorrenteRicardo)

