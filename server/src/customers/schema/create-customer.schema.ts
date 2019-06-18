import * as Joi from '@hapi/joi';

export default {
  name: Joi.string()
    .min(3)
    .max(250),
  phone: Joi.string()
    .min(3)
    .max(250),
  email: Joi.string()
    .min(3)
    .max(250),
  address: Joi.string()
    .min(3)
    .max(250),
  priceThreshold: Joi.number()
    .min(0)
    .max(999999999),
  ageThreshold: Joi.number()
    .min(0)
    .max(999999999),
  debtCollecting: Joi.boolean(),
  mailing: Joi.boolean(),
};
