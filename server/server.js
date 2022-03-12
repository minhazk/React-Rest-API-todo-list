require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();

app.use(
  cors({
    origin: '*',
  })
);
app.use(express.json());
const todosRouter = require('./routes/todos');
app.use('/todos', todosRouter);

const PORT = 3001;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
