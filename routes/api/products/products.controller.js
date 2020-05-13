const Products = require('./products.scheme')

exports.findAll = (req, res, next) => {
    const q = req.query;
    const where = {}
    if(q.nameProduct) where['nameProduct'] = q.nameProduct;
    if(q.price) where['price'] = q.price;

    Products.find(where)
    .limit(req.query.limit || 0)
    .skip(req.query.skip || 0)
    .populate('category')
    .then(products => {
        res.json(products);
    })
    .catch(err => next(err))
}

exports.findById = (req, res, next) => {
    const id = req.params.id
    Products.findById(id)
    .populate('category')
    .then(products => {
        res.json(products);
    })
    .catch(err => next(err));
}

exports.insert = (req, res, next) => {
    let data = req.body;
    Products.create(data)
    .then(products => {
        res.json({
            message: `New product added!`,
            data: products
        });
    })
    .catch(err => next(err))
}

exports.updateById = (req, res, next) => {
    const id = req.params.id
    const data = req.body
    Products.findByIdAndUpdate(id, data)
    .then(products => {
        res.json({
            message: `Product ${id} updated`,
            data: products
        });
    })
    .catch(err => next(err))
}

exports.remove = (req, res, next) => {
    Products.remove()
    .then(products => {
        res.json({
            message: `All products removed`,
            data: products
        });
    })
    .catch(err => next(err))
}

exports.removeById = (req, res, next) => {
    const id = req.params.id
    Products.findByIdAndRemove(id)
    .then(products => {
        res.json({
            message: `Products ${id} removed!`,
            data: products
        });
    })
    .catch(err => next(err))
}