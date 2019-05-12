import { addDecorator, configure } from '@storybook/vue';

import 'bulma/css/bulma.css';

const req = require.context('../../packages/foundation/src', true, /\.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(() => ({
  template: `
    <div style="padding: 10px;">
      <story />
    </div>
  `
}));
configure(loadStories, module);
