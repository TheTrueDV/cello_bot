const axios = require('axios');
const config = require('../config');
const helixBaseUrl= 'https://api.twitch.tv/helix';
const helix = axios.create({
	baseURL: helixBaseUrl,
});

const authBaseUrl = 'https://id.twitch.tv/oauth2';
const authAPI = axios.create({
	baseURL: authBaseUrl,
});
/**
 * @typedef TwitchAPIUser
 * @prop {string} id - The User ID
 * @prop {string} login - The User login name.
 * @prop {string} display_name - The User display name.
 * @prop {string} type - The User type: "staff", "admin", "global_mod", or "".
 * @prop {string} broadcaster_type - The User broadcaster type: "partner", "affiliate", or "".
 * @prop {string} description - The User channel description.
 * @prop {string} profile_image_url - The URL of the user’s profile image.
 * @prop {string} offline_image_url - The URL of the user’s offline image.
 * @prop {integer} view_count - The total number of views of the user’s channel.
 * @prop {string} email - The User verified email address. Returned if the request includes the user:read:email scope.
 * @prop {string} created_at - The date when the user was created.
 */

/**
 * @param {any} options
 * @param {string} options.token - The OAuth token for the expected user.
 * @returns {TwitchAPIUser}
 */

async function getUser({token, clientId} = {}) {
	const {data: {data }} =	await helix.get('/users', {
		headers: {
			'Client-Id': clientId,
			Authorization: `Bearer ${token}`
		}
	});	
	// console.log(data);
	return data[0] || null;
}

/**
 * 
 * @param {string[]} id - List of Channel Ids
 * @param {string} clientId - Client Id
 * @param {string} token - Access Token 
 * @returns {TwitchAPIUser[]} - Array of TwitchAPIUsers
 */
async function getUsers({id = [], clientId, token}){
	if (!id.length) return [];
	const qs = new URLSearchParams();
	//TODO: Handle more than 100 ids.
	for (const n of id) {
		qs.append('id', n);
	}
	const {data: {data }} =	await helix.get(`/users?${qs}`, {
		headers: {
			'Client-Id': clientId,
			Authorization: `Bearer ${token}`
		}
	});	
	// console.log(data);
	return data;
}

async function getAccessToken(refresh_token){
	const qs = new URLSearchParams({
		grant_type: 'refresh_token',
		refresh_token,
		client_id: config.TWITCH_CLIENT_ID,
		client_secret: config.TWITCH_CLIENT_SECRET,
	});
	const {data} = await authAPI.post(`/token?${qs}`);
	// console.log({data});
	return data;
}


module.exports = {
	authAPI, 
	getUser,
	getUsers,
	getAccessToken,
};