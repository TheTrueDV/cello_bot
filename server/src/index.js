const express = require('express');
const cors = require('cors');
const volleyball = require('volleyball');
const helmet = require('helmet');

require('dotenv').config();

require('./db');
const middlewares = require('./middlewares');
const { config } = require('dotenv');

const bot = require('./bot');

bot.init();

const app = express();
app.use(cors());
app.use(volleyball);
app.use(helmet());
app.use(express.json());

app.use(middlewares.decodeAuthHeader);

app.get('/', (req, res) => {
	res.json({
		message: 'Twitch Bot! 🤖',
		login: 'http://localhost:8888/auth/twitch?scope=moderation:read%20chat:read%20chat:edit%20whispers:read+whispers:edit'
	});
});

app.use('/auth/twitch', require('./auth/twitch'));
app.use('/api/channel', require('./api/channel'));

app.use((req,res, next) => {
	const error = new Error('Not Found - ' + req.originalUrl);
	res.status(404);
	next(error);
});

app.use((error, req, res, next) => {
	res.status(res.statusCode === 200 ? 500 : res.statusCode);
	res.json({
		message: error.message,
		stack: config.NODE_ENV === 'production' ? undefined : error.stack, 
	});
	
});

const port = process.env.port || 8888;
const server = app.listen(
	port,
	() => 
		console.log('http://localhost:' + server.address().port)
);
