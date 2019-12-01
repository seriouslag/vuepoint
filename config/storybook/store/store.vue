<template>
  <div></div>
</template>

<script lang="ts">
import Vuex from 'vuex';
import { Component, Vue } from 'vue-property-decorator';
import { store } from './globalStore';

@Component
class Store extends Vue {
  private beforeCreate () {
    // This will register a module to the store if a store is present
    if ((this.$store as any) && !(this.$store as any)._modules.root._children.globalStore) {
      this.$store.registerModule(['globalStore'], store);
    }
  }
}

export default Store;
</script>
