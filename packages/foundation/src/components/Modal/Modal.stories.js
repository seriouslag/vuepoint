import { storiesOf } from '@storybook/vue'
import { withKnobs, button } from '@storybook/addon-knobs/react'

import Modal from './Modal.vue'

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
      open() {
        this.value = true
      },
      close() {
        this.value = false
      },
    },
  }))
