const { model, Schema } = require('mongoose');

const UserSchema = new Schema({
	twitchId: {
		type: String,
		required: true,
		unique: true
	},
	refresh_token: { 
		type: String,
		required: true,
	}
}, {versionKey: false});
const userModel = model('user', UserSchema);
module.exports = userModel;