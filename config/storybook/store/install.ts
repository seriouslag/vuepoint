import Store from './store.vue';
import { VueConstructor } from 'vue';

function install (Vue: VueConstructor) {
  Vue.component('store', Store);
}

export default install;
