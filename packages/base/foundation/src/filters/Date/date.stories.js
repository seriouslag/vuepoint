import { storiesOf } from '@storybook/vue';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import values from './values';

import './date';

storiesOf('Foundation|Filters', module)
  .addDecorator(withKnobs)
  .add('toDate', () => ({
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
            {{ customValue | toDate }}
          </td>
        </tr>
        <tr>
          <td>
            Now: {{ now }}
          </td>
          <td>
            {{ now | toDate }}
          </td>
        </tr>
        <tr v-for="value in values">
          <td>
            {{ value }}
          </td>
          <td>
            {{ value | toDate }}
          </td>
        </tr>
      </table>
    `,
    props: {
      customValue: {
        default: text('Custom value', 7834783748347),
      },
    },
    data: () => ({
      values,
      now: Date.now(),
    }),
    created () {
      setInterval(() => this.now = Date.now(), 1000);
    },
  }));
