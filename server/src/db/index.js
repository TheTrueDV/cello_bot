const mongoose = require('mongoose');

const config  = require('../config');


mongoose.connect(`mongodb://${config.MONGO_HOST}/`, {
	user: config.MONGO_USER,
	pass: config.MONGO_PASS,
	dbName: config.MONGO_DBNAME,
	useNewURLParser: true,
	// useCreateIndex: true,
	// useFindAndModify: false
});

const { connection: db } = mongoose;

db.on('connected', () => {
	console.log('Database connected');
});

db.on('disconnected', () => {
	console.log('Database disconnected');
});

db.on('error', err => {
	console.log(err);
});
require('./bot');
module.exports = db;