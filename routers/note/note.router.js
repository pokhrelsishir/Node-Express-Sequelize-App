'use strict';

var noteController = require('../../controllers/note.controller.js');
var express = require('express');
var router = express.Router();

/*Get All Notes */
router.get('/api/note', noteController.getAllNotes);

/* Create New Note */
router.post('/api/note', noteController.createNote);

/* Get Note Detail */
router.get('/api/note/:id', noteController.getNote);

/* Edit Note */
router.put('/api/note', noteController.editNote);

/* Delete Note */
router.delete('/api/note/:id', noteController.deleteNote);

modules.exports = router;