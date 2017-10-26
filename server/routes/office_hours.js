const express = require('express');
const models = require('../models');
const Sequelize = require('sequelize');

const router = express.Router();

// Index
router.get('/',(req, res)=>{
	models.OfficeHours.findAll().then((office_hours) => {
		res.status(200).send(office_hours);
	});
});

// Create
router.post('/',(req, res)=>{
	models.OfficeHours.create({
		person_id : req.body.person_id,
		location_id : req.body.location_id,
		dayIndicator : req.body.dayIndicator,
		startTime : req.body.startTime,
		endTime : req.body.endTime,
		expiresOn : req.body.expiresOn,
		phone: req.body.phone,
		title: req.body.title
	}).then(()=>res.status(200).send());
});

// Delete
router.delete('/:id',(req, res)=>{
	models.OfficeHours.destroy({
		where:{ id : req.params.id}
	}).then(()=>
		res.status(200).send()
);
})

// Show
router.get('/:id',(req, res)=>{
	models.OfficeHours.findById(req.params.id).then((office_hours)=>{
		if(office_hours == null) {
		      res.status(404).send();
		    } else {
		    		res.status(200).send(office_hours)
		    }
	})
})

// Update
router.put('/:id', (req, res) => {
  models.OfficeHours.findById(req.params.id).then((office_hours) => {
    if (office_hours == null) {
      res.status(404).send();
    } else {
      const updatedOfficeHours = office_hours;

      if (req.body.person_id !== undefined) { updatedOfficeHours.person_id = req.body.person_id; }
      if (req.body.location_id !== undefined) { updatedOfficeHours.location_id = req.body.location_id; }
      if (req.body.dayIndicator !== undefined) { updatedOfficeHours.day_indicator = req.body.dayIndicator; }
      if (req.body.startTime !== undefined) { updatedOfficeHours.start_time = req.body.startTime; }
      if (req.body.endTime !== undefined) { updatedOfficeHours.end_time = req.body.endTime; }
      if (req.body.expiresOn !== undefined) { updatedOfficeHours.expires_on = req.body.expiresOn; }
      if (req.body.phone !== undefined) { updatedOfficeHours.phone = req.body.phone; }
      if (req.body.title !== undefined) { updatedOfficeHours.title = req.body.title; }

      updatedOfficeHours.save().then(
        () => res.status(200).send(updatedOfficeHours)
      ).catch(Sequelize.ValidationError, () => {
        res.status(400).send();
      }).error(() => {
        res.status(500).send();
      });
    }
  });
});


module.exports = router;