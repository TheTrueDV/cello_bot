const { model, Schema } = require('mongoose');

const BotSchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},
	refresh_token: { 
		type: String,
		required: true,
	}
});
const botModel = model('Bot', BotSchema);
module.exports = botModel;