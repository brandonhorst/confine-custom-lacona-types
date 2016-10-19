var _ = require('lodash')

var key = {
  validate: function (obj, schema) {
    return (
      _.isPlainObject(obj) &&
      _.isNumber(obj.key) && obj.key >= 0 &&
      _.isString(obj.string) &&
      _.isString(obj.display) &&
      _.chain(obj).keys().difference(['key', 'string', 'ctrl', 'alt', 'shift', 'cmd', 'display']).isEmpty().value() &&
      (_.isUndefined(obj.ctrl) || _.isBoolean(obj.ctrl)) &&
      (_.isUndefined(obj.alt) || _.isBoolean(obj.alt)) &&
      (_.isUndefined(obj.shift) || _.isBoolean(obj.shift)) &&
      (_.isUndefined(obj.cmd) || _.isBoolean(obj.cmd))
    )
  },
  validateSchema: function (schema) {
    return true
  }
}

var auth = {
  validate (obj, schema) {
    return _.isPlainObject(obj)
  },
  validateSchema (schema) {
    return _.isPlainObject(schema) && _.isString(schema.method)
  }
}

module.exports = {
  key: key,
  auth: auth
}