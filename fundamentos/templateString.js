const nome = 'Rebeca'
const concatenacao = 'Olá ' +  nome + '!'
const template = `
Olá
${nome}!`
console.log(concatenacao, template)

// expressoes
console.log (`1 + 1 = ${1 + 1}`)
console.log (`1 + 1 = ${3 * 1}`)

const up = texto => texto.toUpperCase()
console.log (`ei... ${up('cuidado')}!`)