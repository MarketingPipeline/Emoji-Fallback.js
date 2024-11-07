import twemoji from "twemoji";

/**
 * Checks if the provided string is valid.
 * @param {string} string - The string to validate.
 * @returns {boolean} True if the string is valid, false otherwise.
 */
const isValidString = (string) => {
  return typeof string === 'string' && string.trim().length > 0;
};

/**
 * Checks if the provided element is a valid DOM element or DocumentFragment.
 * @param {Element|DocumentFragment} element - The element to validate.
 * @returns {boolean} True if the element is valid, false otherwise.
 */
const isValidElement = (element) => {
  return element instanceof Element || element instanceof DocumentFragment;
};

/**
 * Checks if the browser supports native emoji rendering.
 * @returns {boolean} True if emojis are supported, false otherwise.
 */
export const emojiSupported = () => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  if (!ctx || typeof ctx.fillText !== 'function') {
    canvas.remove();
    return false;
  }

  ctx.textBaseline = 'top';
  ctx.font = '32px Arial';
  ctx.fillText('\ud83d\ude03', 0, 0);

  let imageData = ctx.getImageData(16, 16, 1, 1).data;
  imageData = imageData[0] !== 0;
  canvas.remove();
  return imageData;
};

/**
 * Replaces Unicode emojis with image emojis using Twemoji if native emoji support is not available.
 * @param {Element|DocumentFragment} [element=document.body] - The DOM element to parse for emojis.
 * @param {string} [cdn='https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/'] - The CDN URL for Twemoji assets.
 * @param {string} className - The CSS class name to apply to the replaced emoji images.
 * @returns {Promise<void>} A promise that resolves when the parsing is complete.
 * @throws {Error} If the provided element or CDN URL is invalid.
 */
export const parseEmoji = async (element = document.body, cdn = 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/', className = 'emoji') => {
  
  if (!isValidElement(element)) {
    throw new Error('Invalid element provided. Must be a valid DOM element.');
  }
  if (!isValidString(cdn)) {
    throw new Error(`Invalid CDN URL provided. Must be a valid string.`);
  }
  
  if (!isValidString(className)) {
    throw new Error(`Invalid ClassName provided. Must be a valid string.`);
  }  
  
  const emojiSupport = emojiSupported();
  
  if (emojiSupport) {
    return;
  }
  
  if (!emojiSupport) {
    return await twemoji.parse(element, {
      base: cdn,
      className: className
    });
  }
};


/**
 * Parses a string with emojis and replaces them with Twemoji image links.
 * @param {string} input - The input string to parse.
 * @param {string} [cdn='https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/'] - The CDN URL for Twemoji assets.
 * @param {string} className - The CSS class name to apply to the replaced emoji images.
 * @returns {Promise<void>} A promise that resolves when the parsing is complete.
 * @throws {Error} If the input string, CDN URL or className is invalid.
 */
export const parseEmojiString = (input, cdn = 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/', className = 'emoji') => {
  if (!isValidString(input)) {
    throw new Error("Invalid input. Must be a non-empty string.");
  }
  
  if (!isValidString(cdn)) {
    throw new Error(`Invalid CDN URL provided. Must be a valid string.`);
  }
  
  if (!isValidString(className)) {
    throw new Error(`Invalid ClassName provided. Must be a valid string.`);
  }  

  // Use Twemoji to parse the input string and replace emojis with image links
  return twemoji.parse(input, {
    base: cdn,
    className: className,
  });
};

/**
 * Checks if emojis are supported and falls back to Twemoji if they are not.
 * @param {Element|DocumentFragment} [element] - The DOM element to parse for emojis.
 * @param {string} [cdn] - The CDN URL for Twemoji assets.
 * @param {string} className - The CSS class name to apply to the replaced emoji images.
 * @returns {Promise<void>} A promise that resolves when the fallback is complete.
 * @throws {Error} If there is an error during the fallback process.
 */
export async function emojiFallback(element, cdn, className) {
  try {
    return await parseEmoji(element, cdn, className);
  } catch (err) {
    throw new Error(`Emoji-Fallback.js Error: ${err?.message || err}`);
  }
}
