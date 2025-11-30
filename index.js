const express = require('express');
const app = express();

// Optional: порт из env или дефолт
const port = process.env.PORT || 3000;

// простой GET на корень
app.get('/', (req, res) => {
  res.send('response for GET request');
});

// пример маршрута с параметром
const products = [
  { id: 1, name: 'Product 1', brand: 'Brand A' },
  { id: 2, name: 'Product 2', brand: 'Brand B' },
  { id: 3, name: 'Product 3', brand: 'Brand A' }
];

app.get('/products/:brand', (req, res) => {
  const { brand } = req.params;
  const filtered = products.filter(p => p.brand === brand);
  res.json(filtered);
});

app.listen(port, () => {
  console.log(`server start at http://localhost:${port}/`);
});
