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
  // be sure to include its associated Products})
});

router.post('/', (req, res) => {
  Category.create({
    category_name: req.body.category_name
  }).then((newCategory) => {
    res.json(newCategory);
  }).catch((err) => {
    res.json(err);
  })
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
    category_name: req.body.category_name
  },
  {
    where: {
      id:req.params.id,
    },
  }
).then((updatedCategory) => {
    res.json(updatedCategory);
}).catch((err) => {
  res.json(err);
})
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
  .then ((deletedCategory) => {
    res.json(deletedCategory)
  }).catch((err) => res.json(err));
});

module.exports = router;