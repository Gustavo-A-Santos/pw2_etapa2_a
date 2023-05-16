const express = require('express')
const handlebars = require('handlebars')
const exphbs = require('express-handlebars')

const app = express()// construtor

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')
const approved = false

app.post('/verifyUser', (req, res) => {
    const form = {
        name:req.body.name,
        idade:req.body.age
    }
    if(form.name == 'Gisley' && form.age == 52){
        approved = true
    }
    else{
        approved = false
    }
    res.send(approved)
})

app.get('/', function(req, res){
    const user = {
        name: "Gustavo",
        surname: "Santos",
        age: "28"
    }
    res.render('home', {user:user, auth:approved, approved})
})
app.get('/dashboards', function(req, res){
    res.render('dashboards')
})

app.listen(3000)