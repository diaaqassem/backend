const validate = (schema) => {
  return (req, res, next) => {
    // console.log(req.body);
    // res.send();
    const { error } = schema.validate(req.body, {
      abortEarly: false,
    });
    console.log(error);
    if (error) {
      let errMsg = error.details.map((err) => {
        return {
          error: err.message,
          path: err.path,
        };
      });
      return res.status(400).send(errMsg);
    }
    next(); //go to next method
    console.log(error);
  };
};

module.exports = validate;
