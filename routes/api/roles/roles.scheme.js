const { Schema, model } = require('../../../db.config')
const scheme = new Schema({
  name:{
     type: String,
     enum:['superadmin','admin','guest'],
     lowercase: true,
     required: true,
  }
});
module.exports = model('Roles', scheme, 'roles');
