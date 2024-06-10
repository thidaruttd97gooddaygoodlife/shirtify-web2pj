// db.js

const mongoose = require('mongoose');

const connectionURI = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB;

mongoose.connect(connectionURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB successfully');
});

module.exports = db;
