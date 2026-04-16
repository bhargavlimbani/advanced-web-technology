const db = require("../helpers/db.helper");
const { Op } = require("sequelize");

module.exports = {
  create,
  fetchAll,
  findOne,
  deleteProduct,
  update,
};

// CREATE
async function create(params) {
  const existing = await db.Product.findOne({
    where: { product_name: params.product_name },
  });

  if (existing) {
    throw new Error(`Product ${params.product_name} already exists`);
  }

  const product = await db.Product.create(params);
  return product;
}

// FETCH ALL
async function fetchAll() {
  return await db.Product.findAll();
}

// FIND ONE
async function findOne(id) {
  return await getProduct(id);
}

// UPDATE
async function update(id, params) {
  const product = await getProduct(id);

  const nameChanged =
    params.product_name &&
    params.product_name !== product.product_name;

  if (nameChanged) {
    const existing = await db.Product.findOne({
      where: { product_name: params.product_name },
    });

    if (existing) {
      throw new Error(
        `Product with name ${params.product_name} already exists`
      );
    }
  }

  Object.assign(product, params);
  await product.save();

  return product;
}

// DELETE (Toggle Status)
async function deleteProduct(id) {
  const product = await getProduct(id);

  product.product_status = !product.product_status;

  await product.save();
  return product;
}

// HELPER FUNCTION
async function getProduct(id) {
  const product = await db.Product.findByPk(id);

  if (!product) {
    throw new Error("Product not found");
  }

  return product;
}
