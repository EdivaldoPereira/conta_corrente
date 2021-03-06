import {Cliente} from "./Cliente.js"
import { Gerente } from "./Funcionario/Gerente.js"
import { Diretor } from "./Funcionario/Diretor.js"
import { SistemaAutenticacao } from "./Funcionario/SistemaAutenticacao.js"

const diretor = new Diretor("Rodrigo", 10000, 12345678900)
diretor.cadastrarSenha("123456")

const gerente = new Gerente("Ricardo", 5000, 12345678901)
gerente.cadastrarSenha("012345")

const cliente = new Cliente("Lais", 45678916541, "123")

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456")
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "012345")
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "123")

console.log(diretorEstaLogado,"\n",gerenteEstaLogado)
console.log(clienteEstaLogado)
