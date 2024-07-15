/* Stuff for webpack config / build process 
Note / step for cutting release -
update package.json FIRST with version - to keep updated version in license.
THEN create build.
*/ 
const packageData = require('../package.json');

const REPONAME = `Emoji-Fallback.js`;

const LICENSE = `/**!
 * @license ${REPONAME} - ${packageData.description}
 * VERSION: ${packageData.version}
 * LICENSED UNDER ${packageData?.license} LICENSE
 * MORE INFO CAN BE FOUND AT https://github.com/MarketingPipeline/${REPONAME}/
 */`;

const FILENAME = "emojiFallback"; // used for output file name

const packageCONFIG = {LICENSE,FILENAME};

module.exports = packageCONFIG
