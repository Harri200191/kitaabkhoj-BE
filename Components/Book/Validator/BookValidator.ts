/**
 *        @file BookValidator.ts
 *  @repository 016-n-3020_impact_api
 * @application 016-n-3020_impact_api
 *     @summary Book Validator Class
 * @description Defines validation structure for Book API requests
 */

import Joi from 'joi'


class BookValidator {
  public createBook() {
    return Joi.object({
      title: Joi.string().required(),
      author: Joi.string().required(),
      iban: Joi.number().required(),
      price: Joi.number().required(),
      published_date: Joi.string().required(),
      genre_id: Joi.number().required,
      publisher: Joi.string().required()
    })
  }  
  public editBook() {
    return Joi.object({
      title: Joi.string().allow(null),
      author: Joi.string().allow(null),
      iban: Joi.number().allow(null),
      price: Joi.number().allow(null),
      published_date: Joi.string().allow(null),
      genre_id: Joi.number().allow(null),
      publisher: Joi.string().allow(null)
    })
  }

}

export default new BookValidator()