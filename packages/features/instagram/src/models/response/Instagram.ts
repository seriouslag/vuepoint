interface InstagramPagination {
  next_max_id?: string;
  next_url?: string;
}

interface InstagramData {
  id: string;
  user: InstagramUser;
  images: InstagramImage;
  created_time: string;
  caption: InstagramCaption;
  user_has_liked: boolean;
  likes: InstagramCount;
  tags: any[];
  filter: string;
  comments: InstagramCount;
  type: 'video' | 'image' |'carousel';
  link: string;
  location: Location;
  attribution: any;
  users_in_photo: InstagramUser[];
  videos?: Video;
  video_views?: number;
  carousel_media?: CarouselMedia[];
}

interface CarouselMedia {
  images?: InstagramImage;
  videos?: Video;
  users_in_photo: InstagramUser[];
  type: 'video' | 'image';
}

interface Location {
  latitude: number;
  longitude: number;
  nname: string;
  id: number;
}

interface Video {
  standard_resolution: InstagramMedia;
  low_resolution: InstagramMedia;
  low_bandwidth: InstagramMedia;
}

interface InstagramCaption {
  id: string;
  text: string;
  created_time: string;
  from: InstagramUser;
}

interface InstagramImage {
  thumbnail: InstagramMedia;
  low_resolution: InstagramMedia;
  standard_resolution: InstagramMedia;
}

interface InstagramCount {
  count: number;
}

interface InstagramMedia {
  width: string;
  height: string;
  url: string;
  id?: number;
}

interface InstagramUser {
  id: string;
  full_name: string;
  profile_picture: string;
  username: string;
}

interface InstagramMeta {
  code: number;
}

interface Instagram {
  pagination: InstagramPagination;
  data: InstagramData[];
  meta: InstagramMeta;
}

export {
  Instagram,
  InstagramMeta,
  InstagramUser,
  InstagramMedia,
  InstagramCount,
  InstagramImage,
  InstagramCaption,
  InstagramData,
  InstagramPagination,
  Video,
  CarouselMedia,
  Location,
};
