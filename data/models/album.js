'use strict';
import Mongoose from 'mongoose';

const AlbumSchema = Mongoose.Schema({
  title: String,
  year: Number,
  artist:{
      type:Mongoose.Schema.ObjectId,
      ref:'Artist'
  }
});

const Album = Mongoose.model('Album', AlbumSchema);

export default Album;
