const { Model, DataTypes } = require("sequelize");
const db = require('../database/db')

class Movie extends Model{}

Movie.init({
  name: {
    type: DataTypes.STRING
  },
  rating: {
    type: DataTypes.INTEGER
  }}, {
    sequelize:db,
    modelName: 'Movie'
})

module.exports = Movie