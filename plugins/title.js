var title = function(ctx, next) {
  if (!ctx.options.title) return next();
  //if (ctx.options.playlist.length > 1) return next();

  ctx.options.playlist[0].media = {
    metadata: {
      title: ctx.options.title
    }
  }
  return next();
};

module.exports = title;
