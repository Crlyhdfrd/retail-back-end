const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  await Category.findAll({
    include: [{model: Product}]
  }).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  await Category.findOne({
    where: {
      category_id: req.params.id
    },
    include: [{model: Product }]
  }).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
});

router.post('/', async (req, res) => {
  // create a new category
  await Category.create(req.body).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  await Category.update(req.body, {
    where: {
      category_id: req.params.id
    }
  }).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      category_id: req.params.id
    }
  }).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
});

module.exports = router;
