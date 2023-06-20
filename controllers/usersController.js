const User = require("../models/User");

const getUsers = async (req, res) => {
  try {
    const user = await User.find();
    res.json({ user });
  } catch (error) {
    console.log(error);
  }
};

const getUsersByID = async (req, res) => {
  try {
    const { id } = await req.params;
    const user = await User.findById(id);
    res.json({ user });
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const { name, email, password } = await req.body;
    await User.findByIdAndUpdate(req.params.id, {
      name: name,
      email: email,
      password: password,
    });
    res.json({ message: `${name} has updated the data` });
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = await req.params;
    const deletedUser = await User.deleteOne({ id: id });
    res.json({ message: `User has deleted from database` });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getUsers,
  getUsersByID,
  updateUser,
  deleteUser,
};
