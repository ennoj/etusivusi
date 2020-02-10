const express = require('express');
const router = express.Router();

const Link = require('../models/Link');

///// GET ALL LINKS /////
router.get('/', async (req, res) => {
	try {
		const links = await Link.find().sort('-date');
		res.json(links);
	} catch (err) {
		res.json({ message: err });
	}
});

///// GET SPECIFIC LINK /////
router.get('/:id', async (req, res) => {
	// TEST: console.log(req.params.id);
	try {
		const link = await Link.findById(req.params.id);
		res.json(link);
	} catch (err) {
		res.json({ message: err });
	}
});

///// ADD LINK /////
router.post('/', async (req, res) => {
	// TEST: console.log(req.body);
	const link = new Link({
		name: req.body.name,
		url: req.body.url
	});

	try {
		const savedLink = await link.save();
		res.json(savedLink);
	} catch (err) {
		res.json({ message: err });
	}

	/* OPTIONALLY: .save()
    .then(data => {
      // Add status codes here! 401 etc
      res.json(data);
    })
    .catch(err => {
      res.json({ message: err });
    }); */
});

///// DELETE SPECIFIC LINK /////
router.delete('/:id', async (req, res) => {
	try {
		const removedLink = await Link.deleteOne({ _id: req.params.id });
		res.json(removedLink);
	} catch (err) {
		res.json({ message: err });
	}
});

///// UPDATE A LINK /////
router.patch('/:id', async (req, res) => {
	try {
		const updatedLink = await Link.updateOne(
			{ _id: req.params.id },
			{ $set: { name: req.body.name } },
			{ $set: { url: req.body.url } }
		);
		res.json(updatedLink);
	} catch (err) {
		res.json({ message: err });
	}
});

module.exports = router;
