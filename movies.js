const { Router } = require("express");
const movieRouter = Router();
const Movie = require("../models/movie.model");

movieRouter.get("/get", async(req,res) => {
  const allMovies = await Movie.findAll()
  res.status(200).send(allMovies)
})

// movieRouter.post('/post', async(req,res) => {
//   const movie = await Movie.create(req.body)
//   res.send('gotem')
// })

module.exports = movieRouter;