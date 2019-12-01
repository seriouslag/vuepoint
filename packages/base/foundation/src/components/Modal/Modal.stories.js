import { storiesOf } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';

import Modal from './Modal.vue';

storiesOf('Foundation|Modal', module)
  .addDecorator(withKnobs)
  .add('(base)', () => ({
    components: { Modal },
    template: `
      <div>
        <button
          class="button is-info"
          @click="open"
        >
          Open modal
        </button>
        <modal
          :value="value"
          @input="close"
        >
          <p>Modal</p>
          <div
            slot="footer"
            class="buttons"
          >
            <button
              class="button is-info"
              @click="close"
            >
              Cancel
            </button>
          </div>
        </modal>
      </div>
    `,
    data: () => ({
      value: false,
    }),
    methods: {
      open () {
        this.value = true;
        action('opened modal')();
      },
      close () {
        this.value = false;
        action('closed modal')();
      },
    },
  }));
