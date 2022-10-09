const router = require('express').Router();
const { Category, Product, ProductTag } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
    include:[Product]
  }).then(categoryData => res.json(categoryData))
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value

  Category.findByPk(req.params.id, {
    include: [Product]
  }).then(categoryData => res.json(categoryData))
  

  // Category.findByPk({
  //   include:[Product,  category_id]
  // }).then(categoryData => res.json(categoryData))
   
  // be sure to include its associated Products})
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;