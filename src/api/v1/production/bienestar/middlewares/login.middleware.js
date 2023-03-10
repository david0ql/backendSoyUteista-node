const { body, validationResult } = require("express-validator");
const { send } = require("../config/crypto.config");

const loginValidationRules = () => {
  return [
    body("usuario")
      .notEmpty()
      .withMessage("El usuario es obligatorio")
      .isEmail()
      .withMessage("El usuario debe ser un correo electrónico válido"),
    body("clave")
      .notEmpty()
      .withMessage("La clave es obligatoria")
      .isLength({ min: 8 })
      .withMessage("La clave debe tener al menos 8 caracteres"),
  ];
};

const validateLogin = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  return send({ errors: errors.array() }, res);
};

module.exports = {
  loginValidationRules,
  validateLogin,
};
