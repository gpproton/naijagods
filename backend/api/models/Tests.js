/**
 * Tests.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name: { type: 'string', required: true },
    desc: { type: 'string', required: true },
    testId: { type: 'number', defaultsTo: 0 },

  },

};

