const express = require('express')
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient

const app = express()
let logs = Array()
let db = null

MongoClient.connect('mongodb://localhost', (err, client) => {
    if (client) {
        db = client.db('test')
        console.log(`connected to db`)
    }
    else console.log(err)

})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use((req, res, next) => {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


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
        //console.log(req.body)

        let custRes = {}
        if (req.body.operation === '+') {
            custRes = {
                sts: 200,
                msg: 'addition',
                res: (parseInt(req.body.num1) + parseInt(req.body.num2))
            }
        } else {
            custRes = {
                sts: 400,
                msg: 'error',
                res: 0
            }
        }

        let logged = {
            [Date.now()]: custRes
        }
        logs.push(logged)
        console.log(logged)
        res.json(custRes)
    }
)

app.post(`/joke`, (req, res) => {
    let rqObj = req.body;
    if (db) {
        db.collection('jokes').insertOne(rqObj, (err, rslt) => {
            if (rslt) {
                let rsOb = {
                    msg: `Joke saved successfully`,
                    sts: 200
                }
                console.log(`Joke saved`)
                res.json(rsOb)
            }
            else {
                console.log(`Error in saving joke`)
                res.json({ msg: `Problem in Saving`, sts: 899 })
            }
        });
    }
    else res.json({ msg: `Problem in connecting with Db` })
})

app.get(
    `/rvws`,
    (req, res) => {

        let rvws = [];
        rvws.push({
            strs: 1,
            rvr: 'xyz',
            rv: 'its good',
            rvDt: '12-8-1996'
        });
        rvws.push({
            strs: 3,
            rvr: 'pqr',
            rv: 'its really good',
            rvDt: '12-9-1999'
        });
        rvws.push({
            strs: 2,
            rvr: 'abc',
            rv: 'its fantastic',
            rvDt: '1-9-1999'
        });
        rvws.push({
            strs: 5,
            rvr: 'uvw',
            rv: 'its nice',
            rvDt: '10-12-1999'
        });

        res.json(rvws)
    }
)
app.listen(
    3000,
    () => console.log('Example app listening on port 3000!')
)