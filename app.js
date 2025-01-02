const express = require('express')
const path = require('path');
const app = express()
const port = 3001
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const indexRouterV1 = require('./routes/v1/index.js');

app.use('/v1', indexRouterV1);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})