const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')
const port = process.env.PORT || 8000;

const spath = path.join(__dirname, '../public')
const tpath = path.join(__dirname, '../templates/contents')
const ppath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', tpath)
hbs.registerPartials(ppath)

// static path
app.use(express.static(spath))

// routing
app.get('/', (req, res) => {
    res.render('index')
})

app.get('/weather', (req, res) => {
    res.render('weather')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('*', (req, res) => {
    res.render('error', {
        errmsg:"Opps ! Page is not Found"
    })
})

app.listen(port, () => {
    console.log(`listening the server at port ${port}`)
})