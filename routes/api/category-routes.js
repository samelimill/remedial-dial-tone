const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories including associated products
  try {
    const allCategories = Category.findAll({
      include: [{model: Product}]
    });
    res.status(200).json(allCategories);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value including associated products
  try {
    const singleCategory = Category.findByPk(req.params.id, {
      include: [{model: Product}],
    });
    if (!singleCategory) {
      res.status(404).json({message: 'No category found with that ID'});
      return;
    }
    res.status(200).json(singleCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new category
  try {
    const newCategory = Category.create(req.body);
    res.status(200).json(newCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  try {
    const updatedCategory = Category.update({
      where: {
        id: req.params.id,
      },
    });

    if (!updatedCategory) {
      res.status(404).json({message: 'No category found with that ID'});
      return;
    }
    res.status(200).json(updatedCategory);
  } catch (err) {
    res.status(500).json(err);
  };
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  try {
    const deletedCategory = Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!deletedCategory) {
      res.status(404).json({message: 'No category found with that ID'});
      return;
    }
    res.status(200).json(deletedCategory);
  } catch (err) {
    res.status(500).json(err);
  };
});

module.exports = router;
