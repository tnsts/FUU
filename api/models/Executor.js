/**
 * Executor.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    mail: {
      type: 'string',
      required: true,
      maxLength: 50,
      unique: true,
      email: true
    },

    executorName: {
      type: 'string',
      required: true,
      maxLength: 100
    },

    phone: {
      type: 'string',
      required: false,
    },

  },

};
