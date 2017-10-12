const express = require('express');
const models = require('../models');
const Sequelize = require('sequelize');

const router = express.Router();

// Index
router.get('/', (req, res) => {
  models.Location.findAll().then((locations) => {
    res.status(200).send(locations);
  });
});

// Create
router.post('/', (req, res) => {
  models.Location.create({
    building: req.body.building,
    room: req.body.room,
    label: req.body.label
  }).then(() => res.status(200).send()).catch(Sequelize.ValidationError, (err) => {
    res.status(400).send(err);
  });
});

// Delete
router.delete('/:id', (req, res) => {
  models.Location.destroy({
    where: {
      id: req.params.id
    }
  }).then(() => res.status(200).send());
});

// Show
router.get('/:id', (req, res) => {
  models.Location.findById(req.params.id).then((location) => {
    if (location == null) {
      res.status(404).send();
    } else {
      res.status(200).send(location);
    }
  });
});

// Update
router.put('/:id', (req, res) => {
  models.Location.findById(req.params.id).then((location) => {
    if (location == null) {
      res.status(404).send();
    } else {
      const updatedLocation = location;

      if (req.body.label !== undefined) { updatedLocation.label = req.body.label; }
      if (req.body.building !== undefined) { updatedLocation.building = req.body.building; }
      if (req.body.room !== undefined) { updatedLocation.room = req.body.room; }

      updatedLocation.save().then(
        () => res.status(200).send(updatedLocation)
      ).catch(Sequelize.ValidationError, () => {
        res.status(400).send();
      }).error(() => {
        res.status(500).send();
      });
    }
  });
});

module.exports = router;
