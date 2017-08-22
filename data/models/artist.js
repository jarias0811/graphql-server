'use strict';
import Mongoose from 'mongoose';

const ArtistSchema = Mongoose.Schema({
  name: String,
  genre: String
});

const Artist = Mongoose.model('Artist', ArtistSchema);

export default Artist;
