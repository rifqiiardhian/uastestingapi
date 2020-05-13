const express = require('express');
const router = express.Router();
const c = require('./users.controller')
const { auth } = require('../../../secret');
const { validation, paramValidation } = require('./users.validation')

// request without login
// Ketika akan menjalankan testing, seluruh request tanpa login harus dicomment
router.get('/', c.findAll)
router.get('/:id', c.findById)
router.post('/', c.insert)
router.put('/:id', c.updateById)
router.delete('/', c.remove)
router.delete('/:id', c.removeById)
 
// Request with login
router.get('/', auth, c.findAll)
router.get('/:id', auth, paramValidation, c.findById)
router.post('/', auth, validation, c.insert)
router.put('/:id', auth, validation, paramValidation, c.updateById)
router.delete('/', auth, c.remove)
router.delete('/:id', auth, paramValidation, c.removeById)
 
module.exports = router;
