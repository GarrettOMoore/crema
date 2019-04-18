const express = require('express');
const router = express.Router();
const Profile = require('../models/profile');

router.post('/', (req, res) => {
			let profile = new Profile ({
				roast: req.body.roast,
				origin: req.body.origin,
				method: req.body.method,
				artistone: req.body.artistone,
				artisttwo: req.body.artisttwo,
				artistthree: req.body.artistthree,
				genre: req.body.genre
			})
			 profile.save( (err, profile) => {
				if (err) {
					res.json({type: 'error', message: 'Database Error creating Profile.'})
				} else {
					res.json(profile)
			};
		})
	})



module.exports = router;