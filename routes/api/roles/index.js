const express = require('express')
const router = express.Router();

const c = require('./roles.controller')

const { auth } = require('../../../secret');

// Request without login
// Ketika akan menjalankan testing, seluruh request tanpa login harus dicomment
router.post('/', c.insert)

router.get('/', c.findAll)
router.get('/:id', c.findById)

router.delete('/:id', c.removeById)
router.delete('/', c.remove)

router.put('/:id', c.updateById)

// Request with login 
router.post('/', auth, c.insert)

router.get('/', auth, c.findAll)
router.get('/:id', auth, c.findById)

router.delete('/:id', auth, c.removeById)
router.delete('/', auth, c.remove)

router.put('/:id', auth, c.updateById)

module.exports = router;