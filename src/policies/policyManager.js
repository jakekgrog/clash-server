const {
    validationResult
} = require('express-validator');

const policyHandler = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.send({ status: false, errors: errors.array() });
  }
  next();
}

module.exports = policyHandler;