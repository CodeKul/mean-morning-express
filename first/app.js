const express = require('express')
const bodyParser = require('body-parser');

const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

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

        let custRes = {}
        if (req.body.operation === '+') {
            custRes = {
                sts: 200,
                msg: 'addition',
                res: (req.body.num1 + req.body.num2)
            }
        }
        else {
            custRes = {
                sts: 400,
                msg: 'error',
                res: 0
            }
        }
        res.json(custRes)
    }
)

app.listen(
    3000,
    () => console.log('Example app listening on port 3000!')
)