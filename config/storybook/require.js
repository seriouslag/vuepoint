/*
  - None of these can be varibles
  - paths are exact so that they ignore node_modules
*/
const foundation = require.context('../../packages/base/foundation/src', true, /\.stories.js$/);
const instagram = require.context('../../packages/features/instagram/src', true, /\.stories.js$/);

function loadStories () {
  instagram.keys().forEach(instagram);
  foundation.keys().forEach(foundation);
}

export { loadStories };
