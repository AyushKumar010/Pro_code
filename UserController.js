const registerUser = (req, res) => {
  const userName = req.body.name;
  const userEmail = req.body.email;
  const userPassword = req.body.password;
//abcd//
  res.json({
    success: true,
  });
};

module.exports = registerUser;
