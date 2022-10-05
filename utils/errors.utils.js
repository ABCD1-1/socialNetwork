const path = require("path");

module.exports.signUpErrors = (err) => {
  let errors = { pseudo: "", email: "", password: "" };

  if (err.message.includes("pseudo"))
    errors.pseudo = "Pseudo incorrect ou déjà utilisé";

  if (err.message.includes("email"))
    errors.email = "Email incorrect ou déjà utilisé";
  if (err.message.includes("password"))
    errors.password = "La longueur du mot de passe doit être supérieure à 6";

  if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("pseudo"))
    errors.pseudo = "Pseudo déjà utilisé";
  if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("email"))
    errors.email = "Email déjà utilisé";

  return errors;
};

module.exports.signInErrors = (err) => {
  let errors = { message: "" };

  if (err.message.includes("email") || err.message.includes("password"))
    errors.message = "Email ou mot de passe incorrect";

  return errors;
};

module.exports.uploadErrors = (err) => {
  let errors = { format: "", maxSize: "" };

  if (err.message.includes("invalid file"))
    errors.format = "Format incompatible";

  if (err.message.includes("max size"))
    errors.maxSize = "Le fichier doit faire moins de 500Ko";

  return errors;
};

module.exports.fileMaxSize = (req, res, next) => {
  if (req.files) {
    const file = req.files.file;
    let errors = { format: "", maxSize: "" };
    if (file.size > 500000) {
      errors.maxSize = "Le fichier doit faire moins de 500Ko";
      return res.status(201).json({ errors });
    }
  }
  next();
};

module.exports.filesAcceptOne = (req, res, next) => {
  let errors = { format: "", maxSize: "" };
  if (req.files.file.length > 1) {
    errors.format = `Veuillez joindre un seul fichier`;
    return res.status(201).json({ errors });
  }
  next();
};

module.exports.fileExtLimiter = (req, res, next) => {
  if (req.files) {
    let errors = { format: "", maxSize: "" };
    const file = req.files.file;
    const allowedExtArray = [".jpg", ".jpeg", ".png"];
    if (!allowedExtArray.includes(path.extname(file.name))) {
      errors.format = `Format incompatible, seuls les fichiers ${allowedExtArray} sont autorisés`;
      return res.status(201).json({ errors });
    }
  }
  next();
};