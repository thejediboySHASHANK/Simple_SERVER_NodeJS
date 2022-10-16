const Joi = require ('joi')
const express = require ('express')
const { join } = require('path')
const { invalid } = require('joi/lib/types/lazy')
const app = express ()
const readline = require ('readline')
const { read } = require('fs')
const prompt = require("prompt-sync")({ sigint: true });
app.use (express.json())


const PORT = process.env.PORT || 3000

const reader = readline.createInterface ({
    input: process.stdin, 
    output: process.output
})

const num1 = 10
const num2 = 45


app.get ('/', (req, res) => {
    res.send ("Hello World!!")
})

const courses = [
    {id: 1, number1: num1},
    {id: 2, number2: num2},
    {id: 3, Sum: num1+num2}
]
app.get ('/api/numbers', (req, res) => {
    res.send (courses)
})
app.get ('/api/numbers/sum', (req, res) => {
    res.send (courses[2])
})

app.listen (PORT, () => {
    console.log (`Listening on port http://localhost:${PORT}/`)
})