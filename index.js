const express = require('express')
const cors = require('cors')
const app = express();
const port = 3000;

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('hello wow node')
})

const users = [
    { name: 'Sami', id: 0, number: "0178888888888" },
    { name: 'Safi', id: 1, number: "0178888888888" },
    { name: 'Safik', id: 2, number: "0178888888888" },
    { name: 'Sahid', id: 3, number: "0178888888888" },
    { name: 'Sagor', id: 4, number: "0178888888888" },
]

app.get('/users', (req, res) => {
    const search = (req.query.search)
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(searchResult)
    }
    else {
        res.send(users)
    }

})

app.post('/users', (req,res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body)
    // res.send('post got hitted')
    res.json(newUser)
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user)
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'banana'])
})

app.get('/fruits/mango/fazli', (req, res) => {
    res.send('misti misti fazli')
})

app.listen(port, () => {
    console.log('listening to port', port)
})