const { Schema, model } = require('../../../db.config')
const scheme = new Schema({
    nameProduct:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    category: [{
        type: Schema.Types.ObjectId,
        ref: 'Categories', select:true
    }]
},{
    timestamps: true
});
module.exports = model('Products', scheme, 'products');