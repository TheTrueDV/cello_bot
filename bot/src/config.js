require('dotenv').config();

/**
 * @typedef EnviromentConfiguration
 * @prop {string} PORT - The port to listen on.
 * @prop {string} TWITCH_CLIENT_ID - Client ID for the Twitch App
 * @prop {string} TWITCH_CLIENT_SECRET - Client OAuth Secret for the Twitch App
 * @prop {string} BOT_REFRESH_TOKEN
 */

/**
 * @type {EnviromentConfiguration}
 */
const config = {
	...process.env,
};

module.exports = config;