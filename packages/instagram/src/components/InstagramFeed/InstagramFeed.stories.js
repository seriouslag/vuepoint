import { storiesOf } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs/react'

import InstagramFeed from './InstagramFeed.vue'

storiesOf('Instagram|InstagramFeed', module)
  .addDecorator(withKnobs)
  .add('(base)', () => ({
    components: { InstagramFeed },
    template: `
      <div>
        <instagram-feed
          :url="url"
          :access-token="accessToken"
          :cound="count"
        />
      </div>
    `,
    data: () => ({
      url: 'https://api.instagram.com/v1/users/1271829278/media/recent',
      accessToken: '1271829278.5496eb5.fb22e7b5e6bb4d93b9fdf1fa4ba9ce72',
      count: 8,
    }),
  }));
