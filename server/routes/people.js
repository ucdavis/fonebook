const express = require('express');
const models = require('../models');
const Sequelize = require('sequelize');

const router = express.Router();

// Index
router.get('/', (req, res) => {
  models.Person.findAll().then((people) => {
    res.status(200).send(people);
  });
});

// Create
router.post('/', (req, res) => {
  models.Person.create({
    loginid: req.body.loginid,
    first: req.body.first,
    last: req.body.last,
    displayName: req.body.displayName !== undefined ? req.body.displayName : `${req.body.first} ${req.body.last}`,
    email: req.body.email
  }).then(() => res.status(200).send()).catch(Sequelize.ValidationError, (err) => {
    res.status(400).send(err);
  });
});

// Delete
router.delete('/:id', (req, res) => {
  models.Person.destroy({
    where: {
      id: req.params.id
    }
  }).then(() => res.status(200).send());
});

// Show
router.get('/:id', (req, res) => {
  models.Person.findById(req.params.id).then((person) => {
    if (person == null) {
      res.status(404).send();
    } else {
      res.status(200).send(person);
    }
  });
});

// Update
router.put('/:id', (req, res) => {
  models.Person.findById(req.params.id).then((person) => {
    if (person == null) {
      res.status(404).send();
    } else {
      const updatedPerson = person;

      if (req.body.first !== undefined) { updatedPerson.first = req.body.first; }
      if (req.body.last !== undefined) { updatedPerson.last = req.body.last; }
      if (req.body.displayName !== undefined) { updatedPerson.displayName = req.body.displayName; }
      if (req.body.loginid !== undefined) { updatedPerson.loginid = req.body.loginid; }
      if (req.body.email !== undefined) { updatedPerson.email = req.body.email; }

      updatedPerson.save().then(
        () => res.status(200).send(updatedPerson)
      ).catch(Sequelize.ValidationError, () => {
        res.status(400).send();
      }).error(() => {
        res.status(500).send();
      });
    }
  });
});

module.exports = router;
