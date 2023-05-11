const express = require('express')
const handlebars = require('handlebars')
const exphbs = require('express-handlebars')

const app = express()// construtor

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.get('/', function(req, res){
    const user = {
        name: "Gustavo",
        surname: "Santos",
        age: "28"
    }
    res.render('home', {user:user})
})

app.listen(3000)