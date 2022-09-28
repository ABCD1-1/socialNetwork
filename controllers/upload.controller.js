const UserModel = require('../models/user.model');
const { uploadErrors } = require('../utils/errors.utils')

module.exports.uploadProfil = async (req, res) => {
    const file = req.files.file;
    try {
      if (file.size > 500000) throw Error("max size");
    } catch (err) {
      const errors = uploadErrors(err);
      return res.status(500).json({ errors });
    }
    const fileName = req.body.name + ".jpg";
    const filePath = `${__dirname}/../client/public/uploads/profil/${fileName}`
    file.mv(filePath, (err) => {
        if (err) return res.status(500).json({message: err})
    })
    return res.json({message: "File uploaded!"})

};










