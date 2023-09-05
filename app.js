require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

// Express config
const app = express();
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials', (err) => {
    console.log(err);
});

// Servir contenido estatico

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        name: 'Jose Esmil Campusano',
        titulo: 'Curso de NodeJS'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        name: 'Jose Esmil Campusano',
        titulo: 'Curso de NodeJS'
    });
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        name: 'Jose Esmil Campusano',
        titulo: 'Curso de NodeJS'
    });
})

app.get('*', (req, res) => {
    res.sendFile( __dirname + '/public/404.html')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})