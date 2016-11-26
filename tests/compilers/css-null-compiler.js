/* eslint-disable */

/*****************************************
 * Mocha Compiler to Strip Off CSS Code
 * Required by Webpack SASS Loader
 *****************************************/

function noop() {
  return null;
}

require.extensions['.styl'] = noop;
// you can add whatever you wanna handle
require.extensions['.scss'] = noop;
require.extensions['.css'] = noop;
require.extensions['.png'] = noop;
