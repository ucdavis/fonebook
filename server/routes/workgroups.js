const express = require('express');
var models = require('../models');

const router = express.Router();

router.get('/', (req, res) => {
	models.Workgroup.findAll().then(function(workgroups){
		res.status(200).send(workgroups);
	});
});
// create
router.post('/', (req, res, next) => {
	models.Workgroup.create({
		name:req.body.name
	}).then(() => res.status(200).send());
});
// delete
router.delete('/:id', (req, res, next) => {
	models.Workgroup.destroy({
		where:{
			id:req.params.id
		}
	}).then(() => res.status(200).send());
});



module.exports = router;
