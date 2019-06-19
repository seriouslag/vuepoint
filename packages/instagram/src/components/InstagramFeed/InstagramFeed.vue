<template>
<div class="instagram-feed" v-if="fullUrl">
  <div class="columns is-multiline is-centered">
    <div class="column" v-for="data in feed" :key="data.id">
      <a
        href="https://www.instagram.com/ultimasynthwave/"
        :class="{ 'is-vid': data.type === 'video' }"
      >
        <figure class="image is-square" v-if="data.type === 'image' || data.type === 'carousel'">
          <img  :src="data.images.standard_resolution.url">
          <div class="insta-overlay">
            <div>
              <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                <path fill="#f5f5f5" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
              </svg>
              {{data.likes.count}}
            </div>
            <div>
              <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                <path fill="#f5f5f5" d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9Z" />
              </svg>
              {{data.comments.count}}
            </div>
          </div>
        </figure>
        <figure class="is-square" v-if="data.type === 'video'">
          <video :width="data.videos.standard_resolution.width" controls>
            <source :src="data.videos.standard_resolution.url" type="video/mp4">
            Not Available
          </video>
        </figure>
      </a>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit, Watch } from 'vue-property-decorator';

import { Instagram, InstagramData } from '../../models/response/Instagram';

@Component
export default class InstagramFeed extends Vue {

  private feed: InstagramData[] = [];
  private isLoading: boolean = false;

  @Prop({
    required: false,
    type: String,
    default: '',
  })
  private userId!: string;

  @Prop({
    required: false,
    type: String,
    default: ''
  })
  private accessToken!: string;

  @Prop({
    required: false,
    type: Number,
    default: 8,
  })
  private count!: number

  private async fetchFeed() {
    const options: RequestInit = {
      method: 'GET',
    };

    try {
      this.isLoading = true;
      const response = await fetch(this.fullUrl, options);
      const instagram = await response.json() as Instagram || undefined;
      if(instagram && instagram.data) {
        this.feed = instagram.data;
      } else {
        throw new Error('Invalid Instagram response');
      }
    } catch (e) {
      this.feed = [];
    } finally {
      this.isLoading = false;
    }

    this.emitShow();
  }

  @Watch('count', { immediate: true })
  @Watch('accessToken', { immediate: true })
  @Watch('userId', { immediate: true })
  private urlWatcher(newVal: string, oldVal: string): void {
    if (this.fullUrl && (!this.feed.length || newVal !== oldVal)) {
      this.fetchFeed();
    }
  }

  @Watch('isLoading', { immediate: true, deep: true })
  private loadingWatech(): void {
    this.emitLoading();
  }

  get query(): string {
    return this.fullUrl.substring(this.fullUrl.indexOf('?'))
  }

  get fullUrl(): string {
    if (!this.userId || !this.accessToken || !this.count) return '';
    return `https://api.instagram.com/v1/users/${this.userId}/media/recent?access_token=${this.accessToken}&&count=${this.count}`;
  }

  @Emit('loading')
  private emitLoading() {
    return this.isLoading;
  }

  @Emit('show')
  private emitShow() {
    return !!this.feed.length;
  }
}
</script>

<style lang="scss" scoped>
.instagram-feed {
  height: 100%;

  .columns {
    display: flex;

    .column {
      min-width: 200px;
      max-width: 400px;

      a {
        &.is-vid {
          justify-content: center;
          align-items: center;
          height: 100%;
          display: flex;
        }

        figure {
          position: relative;

          .insta-overlay {
            color: whitesmoke;
            fill: whitesmoke;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.3);
            display: none;
            justify-content: space-around;
            align-items: center;
          }

          &:hover {
            .insta-overlay {
              display: flex;
            }
          }
        }
      }
    }
  }
}
</style>
