const productService = require("../services/product.service");

// CREATE
exports.create = async (req, res, next) => {
  try {
    const data = await productService.create(req.body);
    res.status(201).json({
      message: "Product created successfully",
      data,
    });
  } catch (err) {
    next(err);
  }
};

// FETCH ALL
exports.fetchAll = async (req, res, next) => {
  try {
    const data = await productService.fetchAll();
    res.status(200).json({
      message: "Success",
      data,
    });
  } catch (err) {
    next(err);
  }
};

// FIND ONE
exports.findOne = async (req, res, next) => {
  try {
    const data = await productService.findOne(req.params.id);
    res.status(200).json({
      message: "Success",
      data,
    });
  } catch (err) {
    next(err);
  }
};

// UPDATE
exports.update = async (req, res, next) => {
  try {
    const data = await productService.update(
      req.params.id,
      req.body
    );

    res.status(200).json({
      message: "Product updated",
      data,
    });
  } catch (err) {
    next(err);
  }
};

// DELETE
exports.delete = async (req, res, next) => {
  try {
    const data = await productService.deleteProduct(
      req.params.id
    );

    res.status(200).json({
      message: "Product status updated",
      data,
    });
  } catch (err) {
    next(err);
  }
};
