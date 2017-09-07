const express = require('express');
var models = require('../models');

const router = express.Router();

router.get('/', (req, res) => {
	models.Workgroup.findAll().then(function(workgroups){
		res.status(200).send(workgroups);
	});
});

router.post('/', (req, res, next) => {
	models.Workgroup.create({
		name:req.body.name
	}).then(() => res.status(200).send());
});


module.exports = router;
