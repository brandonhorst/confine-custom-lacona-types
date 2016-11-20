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
  validate: function (obj, schema) {
    return _.isPlainObject(obj)
  },
  validateSchema: function (schema) {
    return _.isPlainObject(schema) && _.isString(schema.method)
  }
}

var header = {
  validate: function (obj) {
    return _.isUndefined(obj)
  },
  validateSchema: function () {
    return true
  },
  normalize: function () {
    return undefined
  },
  clean: function () {
    return undefined
  }
}

var modifier = {
  validate: function (obj) {
    return _.isPlainObject(obj) && (
      obj.action === 'prefix' ||
      obj.action === 'reveal' ||
      obj.action === 'spotlight' ||
      obj.action === 'copy' ||
      obj.action === 'none'
    ) && (obj.action === 'prefix' ? _.isString(obj.prefix) : _.isUndefined(obj.prefix))
  },
  validateSchema: function () {
    return true
  }
}

module.exports = {
  key: key,
  auth: auth,
  header: header,
  modifier: modifier
}