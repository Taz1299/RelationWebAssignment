const express = require('express');
const app = express();

app.use(express.json());

const authorRoutes = require('./routes/authorRoutes');
const bookRoutes = require('./routes/bookRoutes');

app.use('/authors', authorRoutes);
app.use('/books', bookRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});