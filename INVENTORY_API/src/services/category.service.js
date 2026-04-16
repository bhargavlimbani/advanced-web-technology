const db = require("../helpers/db.helper");

module.exports = {
  create,
  fetchAll,
  findOne,
  deleteCategory,
  update,
};

// CREATE
async function create(params) {
  const existing = await db.category.findOne({
    where: { category_name: params.category_name },
  });

  if (existing) {
    throw new Error(`Category ${params.category_name} already exists`);
  }

  const category = await db.category.create(params);
  return category;
}

// FETCH ALL
async function fetchAll() {
  return await db.category.findAll();
}

// FIND ONE
async function findOne(id) {
  return await getCategory(id);
}

// UPDATE
async function update(id, params) {
  const category = await getCategory(id);

  const nameChanged =
    params.category_name &&
    params.category_name !== category.category_name;

  if (nameChanged) {
    const existing = await db.category.findOne({
      where: { category_name: params.category_name },
    });

    if (existing) {
      throw new Error(
        `Category with name ${params.category_name} already exists`
      );
    }
  }

  Object.assign(category, params);
  await category.save();

  return category;
}

// DELETE (Toggle Status)
async function deleteCategory(id) {
  const category = await getCategory(id);

  category.category_status = !category.category_status;

  await category.save();
  return category;
}

// HELPER
async function getCategory(id) {
  const category = await db.category.findByPk(id);

  if (!category) {
    throw new Error("Category not found");
  }

  return category;
}
