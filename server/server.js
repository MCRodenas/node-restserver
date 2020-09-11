require('./config/config');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
app.use(bodyParser.json())
app.use(require('./routes/usuarios'));
// await mongoose.connect('mongodb://localhost/27017/cafe', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//     useCreateIndex: true
// }, (err, res) => {
//     if (err) throw err;
//     console.log('Base de datos ONLINE');
// });
mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
    (err, res) => {
        if (err) throw err;
        console.log('Base de datos ONLINE');
    });
app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});