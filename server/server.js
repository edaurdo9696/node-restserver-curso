require('./config/config');

const express = require('express')
const app = express()
const mongoose = require('mongoose')


const bodyParser = require('body-parser')

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// cuando hay un app.use son middelwares

app.use(require('./routes/usuarios'));

mongoose.connect('mongodb://localhost:27017/Te', (err, res) => {
    if (err) throw err;
    console.log('Base de datos Online')
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});