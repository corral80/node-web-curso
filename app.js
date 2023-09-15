const express = require('express')
const hbs = require('hbs')
require('dotenv').config()


const app = express()
const port = process.env.PORT 


app.set('view engine', 'hbs')

hbs.registerPartials(__dirname + '/views/partials')


//Contenido statico
app.use( express.static('public') )

app.get('/', function (req, res) {
    res.render('home',{
        nombre : 'Sergio Corral',
        titulo : 'Curso NodeJS'
    })
})

app.get('/generic', function (req, res) {
    res.render('generic',{
        nombre : 'Sergio Corral',
        titulo : 'Curso NodeJS'
    })
})

app.get('/elements', function (req, res) {
    res.render('elements',{
        nombre : 'Sergio Corral',
        titulo : 'Curso NodeJS'
    })
})


app.get('/hola-mundo', function (req, res) {
    res.send('Hola mundo en su respectiva ruta')
})

// app.get('*', function (req, res) {
// //res.send('404 | Page not found')
//     res.sendFile(__dirname+'/public/404.html')
// })

app.listen(port,()=>{
    console.log(`Corriento en el puerto ${port}`)
})