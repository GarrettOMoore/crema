const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dataSchema = new Schema ({
	country: {
		type: String
	},
	"2014": {
		type: Number
	},
	"2015": {
		type: Number
	},
	"2016": {
		type: Number
	},
	"2017": {
		type: Number
	},
	"2018": {
		type: Number
	}
})

module.exports = mongoose.model('Data', dataSchema);