const express = require('express')
const app = express()
const PORT = 6002
const db = require('../database/db')
const Movie = require('../models/movie.model')
const movieRouter = require('../routes/movies')

app.use(express.static('public'))
app.use(express.json())
app.use("/movies", movieRouter)

app.post('/', async(req,res) => {
  const {userInfo} = req.body
  const {userRating} = req.body
  console.log(userInfo)
  console.log(userRating)
  await Movie.create({
    name: userInfo,
    rating: userRating
  })
})


app.listen(PORT, async() => {
  await db.sync({force: true})
})

module.exports = app