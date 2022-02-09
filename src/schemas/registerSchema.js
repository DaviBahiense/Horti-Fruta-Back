import joi from "joi";

const registerSchema = joi.object({
  name: joi.string().required(),
  email: joi.string().required(),
  password: joi.string().required(),
  address: joi.string().required()
});

export default registerSchema;