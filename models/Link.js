const mongoose = require('mongoose');

const LinkSchema = new mongoose.Schema({
	// owner: {
	//   type: Schema.Types.ObjectId,
	//   ref: 'users'
	// },

	name: {
		type: String,
		unique: true,
		maxlength: 30,
		required: true
	},

	url: {
		type: String,
		unique: true,
		maxlength: 300,
		required: true
	},

	category: {
		type: String,
		default: 'user',
		required: true
	},

	date: {
		type: Date,
		default: Date.now()
	}
});

const Link = mongoose.model('Link', LinkSchema);

module.exports = Link;
