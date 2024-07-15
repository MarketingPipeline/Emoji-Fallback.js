# Emoji-Fallback.js
Replaces emoji characters with emoji images on devices that do not have emoji support with image emojis using Twemoji if needed.

> Some older device's do not have emoji support and some emojis are shown as text character's like this <code>☺</code> or sometimes not all. This script provides support on ALL devices by checking if there is emoji support on the device - if no emoji support is detected, then emoji's are replaced with images. For example: <code>☺</code> will become replaced with a <code>img</code> of a smiley face on a device with no emoji support.

## Example and usage

You can view a demo of Emoji Fallback in use [here.](https://marketingpipeline.github.io/Emoji-Fallback.js)


How to use <b><i>Emoji-Fallback.js</b></i>:

```html
<!doctype html>
<html>
<head>
    <title>Emoji-Fallback.js Basic Example</title>
</head>
<body>
    <script type="module">
        import { emojiFallback } from 'https://cdn.jsdelivr.net/gh/MarketingPipeline/Emoji-Fallback.js@latest/dist/emoji-fallback.min.js';
        emojiFallback();
    </script>
</body>
</html>
```



         

How to change the fallback <b>Emoji Sizes</b>:

The image emojis use a CSS class - to change the default styles used this is the CSS class you need to edit & add to your style sheet!

```css
img.emoji {
  display: inline !important;
  border: none !important;
  box-shadow: none !important;
  height: 1em !important;
  width: 1em !important;
  margin: 0 .07em !important;
  vertical-align: -0.1em !important;
  background: none !important;
  padding: 0 !important;
} 
```



## Contributing ![GitHub](https://img.shields.io/github/contributors/MarketingPipeline/Emoji-Fallback.js)

Want to improve this? Create a pull request with detailed changes / improvements! If approved you will be added to the list of contributors of this awesome project!



See also the list of
[contributors](https://github.com/MarketingPipeline/Emoji-Fallback.js/graphs/contributors) who
participate in this project.

## License ![GitHub](https://img.shields.io/github/license/MarketingPipeline/Emoji-Fallback.js)

This project is licensed under the MIT License - see the
[LICENSE.md](https://github.com/MarketingPipeline/Emoji-Fallback.js/blob/main/LICENSE) file for
details.
