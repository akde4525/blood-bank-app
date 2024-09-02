const testController = (req, res) => {
  res.status(200).send({
    message: "Welcom to test route",
    success: true,
  });
};

module.exports = { testController };
