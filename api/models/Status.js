/**
 * Status.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    title: {
      type: 'string',
      required: true,
      maxLength: 100
    },

    name: {
      type: 'string',
      required: true,
      maxLength: 30
    },

    description: {
      type: 'string',
      required: false,
      maxLength: 1024
    },

  },

};
