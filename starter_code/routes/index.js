const express = require("express");
const router = express.Router();
const movies = require('../models/Movies')
/* GET home page */
router.get("/", (req, res, next) => {
  console.log("called");
  res.json({ message: "index" });
});

router.get('/movies', (req,res) =>{
  console.log('movies called');
  movies.find().then(movies=>
  res.json(movies)
)});

router.get('/moviedetails/:id', (req,res) =>{
  console.log('movie id called',req.params);
  movies.findById(req.params.id).then(movies=>
  res.json(movies)
)});

router.post('/new-post',(req,res)=>{
  movies.create(req.body).then(movies=>res.json(movies))
});

router.delete('/delete-post/:id', (req,res) =>{
  console.log('movie id deleted',req.params);
  movies.findByIdAndDelete(req.params.id).then(movies=>
  res.json(movies)
)});
module.exports = router;
