const express = require('express');
const models = require('../models');
const Sequelize = require('sequelize');

const router = express.Router();

// Index
router.get('/', (req, res) => {
  models.Workgroup.findAll().then((workgroups) => {
    res.status(200).send(workgroups);
  });
});

// Create
router.post('/', (req, res) => {
  models.Workgroup.create({
    name: req.body.name
  }).then(() => res.status(200).send());
});

// Delete
router.delete('/:id', (req, res) => {
  models.Workgroup.destroy({
    where: {
      id: req.params.id
    }
  }).then(() => res.status(200).send());
});

// Show
router.get('/:id', (req, res) => {
  models.Workgroup.findById(req.params.id).then((workgroup) => {
    if (workgroup == null) {
      res.status(404).send();
    } else {
      res.status(200).send(workgroup);
    }
  });
});

// Update
router.put('/:id', (req, res) => {
  models.Workgroup.findById(req.params.id).then((workgroup) => {
    if (workgroup == null) {
      res.status(404).send();
    } else {
      const updatedWorkgroup = workgroup;
      if (req.body.name !== undefined) {
        updatedWorkgroup.name = req.body.name;
      }

      updatedWorkgroup.save().then(
        () => res.status(200).send(updatedWorkgroup)
      ).catch(Sequelize.ValidationError, () => {
        res.status(400).send();
      }).error(() => {
        res.status(500).send();
      });
    }
  });
});

module.exports = router;
