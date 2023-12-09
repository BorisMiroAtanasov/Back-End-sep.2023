const express = require('express');
const handlebars = require('express-handlebars');
const mongoose = require('mongoose')
const path = require('path');
const cookieParser = require('cookie-parser')

const {auth} = require('./middlewares/authMiddleware')

const routes = require('./routes')
const PORT = 3000

const app = express();
//config handlebars
//todo change bd name
mongoose.connect('mongodb://127.0.0.1:27017/crypto')
.then(() => console.log(`DB connected successfuly`))
.catch( err => console.log(`DB Error, ` , err.message))

app.engine('hbs',handlebars.engine({extname:'hbs'}));
app.set('view engine', 'hbs' );
app.set('views', 'src/views')

app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.urlencoded({ extended: false })) // parsing body from the forms we recived and query string that we use
app.use(cookieParser());
app.use(auth)// задължително след парсването на cookies
app.use(routes);


app.listen(PORT, console.log(`Server is listening on port ${PORT}...`))