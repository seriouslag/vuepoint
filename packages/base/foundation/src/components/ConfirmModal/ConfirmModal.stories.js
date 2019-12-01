import { storiesOf } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';

import ConfirmModal from './ConfirmModal.vue';

storiesOf('Foundation|ConfirmModal', module)
  .addDecorator(withKnobs)
  .add('(base)', () => ({
    components: { ConfirmModal },
    template: `
      <div>
        <button
          class="button is-info"
          @click="open"
        >
          Open modal
        </button>
        <confirm-modal
          v-model="modalValue"
        >
          <span
            slot="header"
          >
              Update thing
          </span>
          <p>
              Are you sure you want to update this thing?
          </p>
          <button
            class="button is-primary"
            @click="updateThing()"
            slot="confirm"
          >
            Update
          </button>
      </confirm-modal>
      </div>
    `,
    data: () => ({
      modalValue: false,
    }),
    methods: {
      open () {
        this.modalValue = true;
      },
      updateThing () {
        action('thing was updated')();
        this.modalValue = false;
      },
    },
  }));
