// Emoji Fallback Support 
// by github.com/MarketingPipeline

//// What this does 
// requires Twemoji in document - if no emoji support - replace with images

var emojis = (function() {
// Modernizr Test
var emojiSupported = (function() { 
  var node = document.createElement('canvas');
  if (!node.getContext || !node.getContext('2d') ||
      typeof node.getContext('2d').fillText !== 'function')
    return false;
  var ctx = node.getContext('2d');
  ctx.textBaseline = 'top';
  ctx.font = '32px Arial';
  ctx.fillText('\ud83d\ude03', 0, 0);
  return ctx.getImageData(16, 16, 1, 1).data[0] !== 0;
})();

if (!emojiSupported) {
  // if Emoji not supported 
  twemoji.parse(document.body);
}
}(window, twemoji));

// Wait for document to finish loading
function ready(cb) {
  if (document.readyState != 'loading') {
    cb();
  } else {
    document.addEventListener('DOMContentLoaded', cb);
  }
}

ready(emojis);
