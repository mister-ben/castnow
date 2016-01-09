var Api = require('chromecast-player').api;
var inherits = require('util').inherits;
var debug = require('debug')('castnow:youtube');

var App = function() {
  Api.apply(this, arguments);
};

inherits(App, Api);

var appid = function(ctx, next) {
  if (ctx.mode !== 'launch') return next();
  if (!ctx.options.appid) return next();
  debug('using custom app id');
  App.APP_ID = ctx.options.appid;
  ctx.api = App;
  next();
};

module.exports = appid;
