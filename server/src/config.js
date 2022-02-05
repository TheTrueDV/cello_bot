require('dotenv').config();

/**
 * @typedef EnviromentConfiguration
 * @prop {string} process.env.PORT - The port to listen on.
 * @prop {string} process.env.TWITCH_CLIENT_ID - Client ID for the Twitch App
 * @prop {string} process.env.TWITCH_CLIENT_SECRET - Client OAuth Secret for the Twitch App
 * @prop {string} process.env.TWITCH_CLIENT_REDIR_HOST - Base host for the OAuth redirect URL. 
 * 
 * @prop {string} process.env.MONGO_USER - Username for the Mongo Database
 * @prop {string} process.env.MONGO_PASS - Password for the Mongo Database
 * @prop {string} process.env.MONGO_DBNAME - Mongo Database Name
 * @prop {string} process.env.MONGO_HOST - Mongo Database Host
 * @prop {string} process.env.JWT_SECRET - base-64 secret for JSON Web Token
 * @prop {string} process.env.NODE_ENV
 */

/**
 * @type {EnviromentConfiguration}
 */
const config = {
	...process.env,
};

module.exports = config;