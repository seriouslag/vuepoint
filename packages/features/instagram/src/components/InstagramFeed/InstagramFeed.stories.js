import { storiesOf } from '@storybook/vue';
import { withKnobs, text, number } from '@storybook/addon-knobs/vue';

import InstagramFeed from './InstagramFeed.vue';

storiesOf('Instagram|InstagramFeed', module)
  .addDecorator(withKnobs)
  .add('(base)', () => ({
    components: { InstagramFeed },
    template: `
      <div>
        <h2 class="title">{{ isShowing ? "Latest updates" : isLoading ? "Loading" : "No updates" }}</h2>
        <instagram-feed
          :user-id="userId"
          :access-token="accessToken"
          :count="count"
          @show="show"
          @loading="setLoading"
        />
      </div>
    `,
    props: {
      accessToken: {
        type: String,
        default: text('access_token', '1271829278.0cd3290.245ad4abf3154d5a96dd49987d64e890'),
      },
      userId: {
        type: String,
        default: text('userId', '1271829278'),
      },
      count: {
        type: Number,
        default: number('count', 8, {
          range: true,
          min: 1,
          max: 20,
          step: 1,
        }),
      },
    },
    data: () => ({
      isShowing: false,
      isLoading: false,
    }),
    methods: {
      show (value) {
        this.isShowing = value;
      },
      setLoading (loading) {
        this.isLoading = loading;
      },
    },
  }));
