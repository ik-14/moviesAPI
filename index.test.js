// const request = require('supertest');
// const Movie = require('../models/movie.model');
// const app = require('../server/server');

// test('if get works', async() => {
//   const res = await request(app).get('/movies/get')
//   expect(res.statusCode).toBe(200);
// });

// test('if post works', async() => {
//   const res = await request(app).post('/movies/post').send({
//     name: 'movee',
//     rating: 4
//   })
//   const movies = await Movie.findAll()
//   expect(movies[0]).toHaveProperty("name", "movee");
//   expect(res.statusCode).toBe(200);
// });
