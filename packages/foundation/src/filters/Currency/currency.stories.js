import { storiesOf } from '@storybook/vue'
import { withKnobs, text } from '@storybook/addon-knobs/react'
import values from './values';

import './currency';

storiesOf('Foundation|Filters', module)
  .addDecorator(withKnobs)
  .add('toCurrency', () => ({
    template: `
      <table class="table">
        <tr>
          <th>Raw</th>
          <th>Formatted</th>
        </tr>
        <tr>
          <td>
            Custom: {{ customValue }}
          </td>
          <td>
            {{ customValue | toCurrency }}
          </td>
        </tr>
        <tr v-for="value in values">
          <td>
            {{ value }}
          </td>
          <td>
            {{ value | toCurrency }}
          </td>
        </tr>
      </table>
    `,
    props: {
      customValue: {
        default: text('Custom value', 100)
      }
    },
    data: () => ({
      values
    })
  }));
