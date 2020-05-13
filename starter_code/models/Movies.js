const mongoose = reqiure('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
      title: String,
      directors: String,
      stars:[String],
      image:String,
      discription:String,
      showtimes:[String]
});
const movie = mongoose.model('movies',movieSchema);
module.exports = movies;