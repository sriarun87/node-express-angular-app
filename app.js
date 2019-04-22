const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const login = require('./routes/login');
const register = require('./routes/register');


app.use(bodyParser.json());
app.use(cors);

app.use(login);
app.use(register);

app.listen('3000', () => {
  console.log('The server started running on http://localhost:3000');
});