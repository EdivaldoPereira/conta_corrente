class Cliente{
    nome
    cpf
}

class ContaCorrente{
    agencia
    _saldo = 0

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor
            return valor
        }
    }

    depositar(valor){
        if(valor <= 0){
            return
        }
        this._saldo += valor
    }
}

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

