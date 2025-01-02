const express = require('express')
const app = express()
const port = 3001
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.post('/product', (req, res) => {
  const{name, description, unit_price, stock_amount, category, warehouse}=req.body;

  if (typeof unit_price !== 'number' || typeof stock_amount !== 'number') {
    return res.status(400).send('Invalid data types for unit_price or stock_amount');
  }

  if (!name || !description || !unit_price || !stock_amount || !category || !warehouse) {
    return res.status(400).send('Missing required fields');
  }

  res.send(name + " " + description + unit_price + stock_amount + category + warehouse);
});

app.post('/category', (req, res) => {
  const{category}=req.body;
  res.send(category);
})

app.delete('/product/:id', (req, res) => {
  const{id}=req.params; //<----------GPT
  res.send(id)
})

app.put('/product', (req, res) => {
  const{product_id, stock_amount}=req.body;
  if (typeof unit_price !== 'number' || typeof stock_amount !== 'number') {
    return res.status(400).send('Invalid data types for unit_price or stock_amount');
  }
  res.send(product_id + stock_amount)
})

app.get('/statusWarehouse', (req, res) => {
  res.send('Hello World!5')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})