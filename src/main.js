const aluno = [
    {nome: 'Pedro', nota: 4.5},
    {nome: 'João', nota: 7.75},
    {nome: 'Thiago', nota: 9.25},
    {nome: 'Matheus', nota: 8.5},
    {nome: 'Felipe', nota: 7},
]

const aprovado = aluno.filter((aluno) => {
    return aluno.nota >= 7;
})

console.log(aprovado);