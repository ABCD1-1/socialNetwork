const UserModel = require("../models/user.model");
const ObjectID = require("mongoose").Types.ObjectId; // to control if the ID is detected by the DB

module.exports.getAllUsers = async (req, res) => {
  const users = await UserModel.find().select("-password"); //select everything except password
  res.status(200).json(users);
};

module.exports.userInfo = (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown: " + req.params.id);

  UserModel.findById(req.params.id)
  .select("-password")
  .then((data) => res.send(data))
  .catch((err) => res.status(400).send({ message: err }));

};

module.exports.updateUser = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown: " + req.params.id);

  try {
    await UserModel.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          bio: req.body.bio,
        },
      },
      { new: true, upsert: true, setDefaultsOnInsert: true },
    ).then((data) => res.send(data))
    .catch((err) => res.status(400).send({ message: err }));
  } catch (err) {
    return res.status(500).send({message: err});
  }
};

module.exports.deleteUser = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown: " + req.params.id);

  try {
    await UserModel.remove({ _id: req.params.id }).exec();
    res.status(200).json({ message: "Sucessfully deleted." });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

module.exports.follow = async (req, res) => {
  if (
    !ObjectID.isValid(req.params.id) ||
    !ObjectID.isValid(req.body.idToFollow)
  )
    return res.status(400).send("ID unknown : " + req.params.id);

  try {
    // add to the following list
    await UserModel.findByIdAndUpdate(
      req.params.id,
      { $addToSet: { following: req.body.idToFollow } },
      { new: true, upsert: true }
    )
      .then((data) => res.send(data))
      .catch((err) => res.status(400).send({ message: err }));
      
    // add to follower list
    await UserModel.findByIdAndUpdate(
      req.body.idToFollow,
      { $addToSet: { followers: req.params.id } },
      { new: true, upsert: true }
    )
      .then((data) => res.send(data))
      .catch((err) => res.status(400).send({ message: err }));
  } catch (err) {
    // return res.status(400).json(err);
  }
};

module.exports.unfollow = async (req, res) => {
  if (
    !ObjectID.isValid(req.params.id) ||
    !ObjectID.isValid(req.body.idToUnfollow)
  )
    return res.status(400).send("ID unknown : " + req.params.id);

  try {
    await UserModel.findByIdAndUpdate(
      req.params.id,
      { $pull: { following: req.body.idToUnfollow } }, // $pull to remove
      { new: true, upsert: true }
    )
      .then((data) => res.send(data))
      .catch((err) => res.status(400).send({ message: err }));

    // remove to following list
    await UserModel.findByIdAndUpdate(
      req.body.idToUnfollow,
      { $pull: { followers: req.params.id } },
      { new: true, upsert: true }
    )
      .then((data) => res.send(data))
      .catch((err) => res.status(400).send({ message: err }));
  } catch (err) {
    // console.log(err);
    // return res.status(500).json({ message: err });
  }
};
