const express = require('express')
var bodyParser = require('body-parser');
const app = express()

app.get(
    '/', 
    (req, res) => res.send('Hello World!')
)

app.get(
    '/calcv1/:num1/:num2', 
    (req, res) => {
        console.log(req.params)
        res.send(`Addition of ${req.params['num1']} and ${req.params['num2']} is ${parseInt(req.params['num1']) + parseInt(req.params['num2'])} `)
    }
)

app.post(
    '/calcv2',
    (req, res) => {
        console.log(req.body)
        res.end()
    }
)

app.listen(
    3000, 
    () => console.log('Example app listening on port 3000!')
)

