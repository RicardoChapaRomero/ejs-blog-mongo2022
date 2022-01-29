const express = require('express');
const router = express.Router();
const Post = require('../model/posts');

router.get('/', async function (req, res) {
  const posts = await Post.find();
  res.render('index', { posts });
});


router.get('/newPost', async (req, res) => {
  res.render('newPost');
});

router.post('/newPost', async (req, res) => {
  const new_post = new Post(req.body);
  await new_post.save();

  res.redirect('/');
});

router.get('/edit/:id', async (req, res) => {
  const id = req.params.id;
  const post = await Post.findById({ _id: id });
  res.render('edit', { post });
});

router.post('/edit/:id', async (req, res) => {
  await Post.updateOne({ _id: req.params.id }, req.body);
  res.redirect('/');
});

router.get('/delete/:id', async (req, res) => {
  const id = req.params.id;
  const post = await Post.findById({ _id: id });
  res.render('delete', { post });
});

router.post('/delete/:id', async (req, res) => {
  await Post.deleteOne({ _id: req.params.id });
  res.redirect('/');
});


module.exports = router;