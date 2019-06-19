import Vue from 'vue';
import Vuex from 'vuex';

import { addDecorator, configure } from '@storybook/vue';
import { loadStories } from './require';

// this store 
import store from './store';

import 'bulma/css/bulma.css';

Vue.use(Vuex);
Vue.use(store);

addDecorator(() => ({
  template: `
    <div style="padding: 10px;">
      <store />
      <story />
    </div>
  `
}));
configure(loadStories, module);
