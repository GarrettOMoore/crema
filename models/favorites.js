const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const favoritesSchema = new Schema ({
	user_id: {
		type: String,
		required: [true, 'You must enter a name'],
		minlength: [1, 'Name must be between 1 and 99 characters.'],
		maxlength: [99, 'Name must be between 1 and 99 characters']
	},
	password: {
		type: String,
		required: [true, 'You must enter a password.'],
		minlength: [8, 'Password must be between 10 and 128 characters.'],
		maxlength: [128, 'Pass must be between 10 and 128 characters.']
	},
	email: {
		type: String,
		required: [true, 'You must enter an Email.'],
		minlength: [5, 'Email must be between 5 and 99 characters.'],
		maxlength: [99, 'Email must be between 5 and 99 characters.']
	},
	city: {
		type: String,
    required: [false],
    minlength: [3],
    maxlength: [99]
  },
  	state: {
    	type: String
  },
		zipcode: {
    	type: String,
    	required: [false]
	},
		image: {
    	type: String
  }
})

// Removes password before showing data as a JSON object

favoritesSchema.set('toObject', {
	transform: function (doc, ret, options)  {
		let returnJson = {
			_id: ret._id,
			email: ret.email,
			name: ret.name,
			city: ret.city,
      state: ret.state,
      zipcode: ret.zipcode,
      image: ret.image
		}
		return returnJson;
	}
});


module.exports = mongoose.model('Favorites', favoritesSchema);