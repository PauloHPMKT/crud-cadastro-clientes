const express = require('express')
const path = require('path')

const db = require('./database')

const app = express()

//connection to database
db.connect()


//defining template engine
app.set('view engine', 'ejs')

//searching views folder
app.set('views', path.join(__dirname, 'views'))

//defining public files
app.use(express.static(path.join(__dirname, 'public')))

//abble server to receive form data (post method)
app.use(express.urlencoded({ extended: true }))

//routes 
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Titulo de teste'
    })
})

//error not found 404
app.use((req, res) => {
    res.send('Page not found!')
})

//running server
const port = process.env.port || 8080
app.listen(port, () => console.log(`server is running on port http://localhost:${port}`))