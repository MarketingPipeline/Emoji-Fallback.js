# Changelog

All notable changes to this project will be documented in this file.

## [2.0.0] - (July 15, 2024)

### Added
- Support for using via ES6 Imports.
- Webpack Config Build.
- emojiSupported function to check native emoji rendering support.
- parseEmoji function to replace Unicode emojis with image emojis using Twemoji.
- emojiFallback function to handle emoji parsing and fallback with error handling.
  
### Changed
- Extracted emoji support check and parsing logic into modular functions.
- Fixed CDN issue see [here](https://github.com/twitter/twemoji/issues/580)
- Improved code readability and maintainability.
- License from GPL-3.0 to MIT.

## [1.0.0] - (Aug 7, 2022)

Initial Release. 


<!--
These Markdown anchors provide a link to the diff for each release. They should be
updated any time a new release is cut.
-->
[2.0.0]: /v2.0.0
[1.0.0]: /v1.0.0
