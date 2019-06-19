import { storiesOf } from '@storybook/vue';
import { withKnobs, text, number } from '@storybook/addon-knobs/vue';

import InstagramFeed from './InstagramFeed.vue'

storiesOf('Instagram|InstagramFeed', module)
  .addDecorator(withKnobs)
  .add('(base)', () => ({
    components: { InstagramFeed },
    template: `
      <div>
        <h2 class="title">{{ isShowing ? "Latest updates" : isLoading ? "Loading" : "No updates" }}</h2>
        <instagram-feed
          :url="url"
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
        default: text('access_token', '1271829278.5496eb5.fb22e7b5e6bb4d93b9fdf1fa4ba9ce72'),
      },
      count: {
        type: Number,
        default: number('count', 8),
      },
    },
    data: () => ({
      url: 'https://api.instagram.com/v1/users/1271829278/media/recent',
      isShowing: false,
      isLoading: false,
    }),
    methods: {
      show(value) {
        this.isShowing = value;
      },
      setLoading(loading) {
        this.isLoading = loading;
      }
    }
  }));
