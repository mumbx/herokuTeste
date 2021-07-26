const express = require('express')
const app = express()
const cors = require('cors')
const porta = process.env.PORT

app.use(express.json())
app.use(cors())

app.get('/home', (req, res)=>{

res.send('<h1>Estou usando Heroko maluco')

})

app.listen(porta, ()=>{

    console.log('servidor rodando na porta ' + porta)

})