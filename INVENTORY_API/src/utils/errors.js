function errorHandler(err, req, res, next) {
  switch (true) {

    // Custom string errors
    case typeof err === "string":
      const is404 = err.toLowerCase().includes("not found");
      return res
        .status(is404 ? 404 : 400)
        .json({ message: err });

    // Sequelize / validation errors
    case err.name === "ValidationError":
      return res
        .status(400)
        .json({ message: err.message });

    // Default server error
    default:
      return res
        .status(500)
        .json({ message: "Internal server error" });
  }
}

module.exports = {
  errorHandler,
};
