const path = require("path");

module.exports.signUpErrors = (err) => {
  let errors = { pseudo: "", email: "", password: "" };

  if (err.message.includes("pseudo"))
    errors.pseudo = "Incorrect username or already taken";

  if (err.message.includes("email")) errors.email = "Incorrect email";
  if (err.message.includes("password"))
    errors.password = "Password's length must be greater than 6";

  if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("pseudo"))
    errors.pseudo = "Username already taken";
  if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("email"))
    errors.email = "Email already taken";

  return errors;
};

module.exports.signInErrors = (err) => {
  let errors = { message: "" };

  if (err.message.includes("email") || err.message.includes("password"))
    errors.message = "Unknown email or password";

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
  const file = req.files.file;
  let errors = { format: "", maxSize: "" };
  if (file.size > 500000) {
    errors.maxSize = "Le fichier doit faire moins de 500Koooo";
    return res.status(201).json({ errors });
  }
  next();
};

module.exports.filesAcceptOne = (req, res, next) => {
  let errors = { format: "", maxSize: "" };
  if (req.files.file.length > 1) {
    errors.format = `Only one file can be accepted`
    return res.status(201).json({ errors });
  }
  next();
};

module.exports.fileExtLimiter = (req, res, next) => {
  let errors = { format: "", maxSize: "" };
  const file = req.files.file;
  const allowedExtArray = [".jpg", ".jpeg", ".png"];
  if (!allowedExtArray.includes(path.extname(file.name))) {
    errors.format = `Format incompatible, seuls les fichiers ${allowedExtArray} sont autorisés`;
    return res.status(201).json({ errors });
  }
  // Object.keys(files).forEach(key => {
  //     fileExtensions.push(path.extname(files[key].name))
  // })

  // //Are the file extension allowed ?
  // const allowed = fileExtensions.every(ext => allowedExtArray)
  // if (!allowed) {
  //     return res.status(422).json({message: `Upload failed, only ${allowedExtArray} files are allowed`.replaceAll(",", ", ")});
  // }
  next();
};
