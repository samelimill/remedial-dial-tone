const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags including associated product data
  try {
    const allTags = Tag.findAll({
      include: [{model: Product}]
    });
    res.status(200).json(allTags)
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`, including associated product data
  try {
    const singleTag = Tag.findByPk(req.params.id, {
      include: [{model: Product}]
    })
  if (!singleTag) {
    res.status(404).json({message: 'No tags found with that ID'});
    return;
  }
  res.status(200).json(singleTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new tag
  try {
    const newTag = Tag.create(req.body);
    res.status(200).json(newTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  try {
    const updatedTag = Tag.update({
      where: {
        id: req.params.id,
      },
    });

    if (!updatedTag) {
      res.status(404).json({message: 'No tags found with that ID'});
      return;
    }
    res.status(200).json(updatedTag);
  } catch (err) {
    res.status(500).json(err);
  };
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  try {
    const deletedTag = Tag.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!deletedTag) {
      res.status(404).json({message: 'No tags found with that ID'});
      return;
    };
    res.status(200).json(deletedTag);
  } catch (err) {
    res.status(500).json(err);
  };
});

module.exports = router;
