const mongoose = require('mongoose');
const express = require('express');

const Schema = mongoose.Schema;

const profileSchema = new Schema ({
	user_id: {
		type: String
	}, 
	roast: {
		type: String
	},
	origin: {
		type: String
	},
	method: {
		type: String
	},
	artistone: {
		type: String
	},
	artisttwo: {
		type: String
	},
	artistthree: {
		type: String
	},
	genre: {
		type: String
	}
})

module.exports = mongoose.model('Profile', profileSchema);