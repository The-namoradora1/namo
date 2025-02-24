
const {retornarPrimeiroNome} = require("./model/dados.js")
const {retornarultimoNome} = require("./model/dados.js")
const {retornarFazoCurso} = require("./model/dados.js")

const express = require('express')
const app = express()
const port = 5000

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(port, msg)


app.get('/primeiroNome', function (req, res) {

    const primeiroNome = retornarPrimeiroNome()
        res.send(primeiroNome);
    })


    app.get('/ultimoNome', function (req, res) {

        const ultimoNome = retornarultimoNome()
            res.send(ultimoNome);
        })

        app.get('/fazocurso', function (req, res) {

            const fazocurso = retornarFazoCurso()
                res.send(fazocurso);
            })

            app.get('/primeiroNome', function (req, res) {

                const primeiroNome = retornarPrimeiroNome()
                    res.send(primeiroNome);
                })

function msg (){
    console.log("Operando na porta " + port)
}