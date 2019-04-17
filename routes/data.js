const express = require('express');
const router = express.Router();
const Data = require('../models/data')

router.get('/', (req, res) => {
	Data.find({}, (err, countries) => {
		if (!err) {
			res.status(200).json(countries)
		} else {
			res.status(500).json({err})
		}
	});
});

module.exports = router;