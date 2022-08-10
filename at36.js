
//Crie um código JavaScript no back-end utilizando o Node.JS. No código, você deverá elaborar uma ou mais rotas, que podem ser de qualquer tipo (get, put etc). Depois, faça um teste em aplicações de rota, como o Postman ou o Insomnia, para confirmar se o retorno está coerente com o que você programou.

//Observação: os prints, ou o próprio código, devem ser divididos por arquivos. Por exemplo, o código de rotas está em um arquivo diferente do código de conexão.




// No arquivo de conexão index.js ---------------------------------------------------------

const express = require('express')
const app = express()
const rota = require('./get')

app.listen(3333, () => {
  console.log('Servidor ativo')
})

app.get('/requisicao', rota)


// No arquivo de rotas rota.js -------------------------------------------------------------
const express = require('express')
let app = express()

module.exports = app.get('/requisicao', (request, response) => {
  return response.send('Resposta para o método get')
})