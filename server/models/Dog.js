const mongoose = require('mongoose');

let DogModel = {};

const DogSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true,
		unique: true,
	},

	breed: {
		type: String,
		default: "unknown",
	},

	age: {
		type: Number,
		min: 0,
		default: 0,
	},

	createdDate: {
		type: Date,
		default: Date.now,
	},

});

DogModel = mongoose.model('Cat', DogSchema);

module.exports = DogModel;