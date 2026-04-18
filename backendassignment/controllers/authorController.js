const { Author } = require('../models');

exports.createAuthor = async (req, res) => {
  try {
    const author = await Author.create(req.body);
    res.status(201).json(author);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllAuthors = async (req, res) => {
  const authors = await Author.findAll();
  res.json(authors);
};

exports.getAuthorById = async (req, res) => {
  const author = await Author.findByPk(req.params.id);
  res.json(author);
};

exports.updateAuthor = async (req, res) => {
  const author = await Author.findByPk(req.params.id);
  await author.update(req.body);
  res.json(author);
};

exports.deleteAuthor = async (req, res) => {
  const author = await Author.findByPk(req.params.id);
  await author.destroy();
  res.json({ message: "Deleted" });
};