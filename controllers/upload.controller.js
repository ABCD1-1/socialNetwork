const UserModel = require("../models/user.model");
const { uploadErrors } = require("../utils/errors.utils");

module.exports.uploadProfil = async (req, res) => {
  const file = req.files.file;
  const fileName = req.body.name + ".jpg";
  const filePath = `${__dirname}/../client/public/uploads/profil/${fileName}`;
  file.mv(filePath, (err) => {
    if (err) return res.status(500).json({ message: err });
  });

  try {
    await UserModel.findByIdAndUpdate(
      req.body.userId,
      { $set: { picture: "./uploads/profil/" + fileName } },
      { new: true, setDefaultsOnInsert: true }
    )
      .then((data) => res.send(data))
      .catch((err) => res.status(500).send({ message: err }));
  } catch (err) {
    return res.status(500).send({ message: err });
  }
};
