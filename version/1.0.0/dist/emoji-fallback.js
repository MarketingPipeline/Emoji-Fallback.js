// Emoji-Fallback.js by github.com/MarketingPipeline
import twemoji from '//cdn.jsdelivr.net/npm/twemoji/2/esm.js';var emojiSupported=(function(){var node=document.createElement('canvas');if(!node.getContext||!node.getContext('2d')||typeof node.getContext('2d').fillText!=='function')
return!1;var ctx=node.getContext('2d');ctx.textBaseline='top';ctx.font='32px Arial';ctx.fillText('\ud83d\ude03',0,0);return ctx.getImageData(16,16,1,1).data[0]!==0})();if(!emojiSupported){twemoji.parse(document.body)}
