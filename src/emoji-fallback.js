// Emoji Fallback Support 
// by github.com/MarketingPipeline

// Import Latest Version Of Twemoji
import twemoji from '//cdn.jsdelivr.net/npm/twemoji/2/esm.js';

// Modernizr Test - Check for Emoji Support

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



// Replace Unicode with Image Emoji's via Twemoji - If No Emoji Supporte 
if (!emojiSupported) {
  // if Emoji not supported 
  twemoji.parse(document.body);
}
