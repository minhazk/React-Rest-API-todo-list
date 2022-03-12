const express = require('express');
const { restart } = require('nodemon');
const router = express();
const { getTodos, addTodo } = require('../todos');

// getting all
router.get('/', (req, res) => {
  res.json(getTodos());
  res.status(200).json();
});

// creating one
router.post('/', (req, res) => {
  const todo = addTodo({ name: req.body.name });
  res.status(201).json(todo);
});

module.exports = router;
