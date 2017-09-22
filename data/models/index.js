'use strict';

import Mongoose from 'mongoose';

const db = Mongoose.connect('mongodb://localhost/graphql-john', {
  useMongoClient: true
});

export default db;
