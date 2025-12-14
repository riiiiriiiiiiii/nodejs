const express = require('express');
const app = express();
const router = require('./routes/index'); // your current router file

const PORT = process.env.PORT || 8080;

app.use(express.json()); // to parse JSON requests
app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
