<template>
  <div>
    <ul>
      <VideoListItem 
        v-for="(video, index) in videos" 
        :video="video" 
        :key="index"
      />
    </ul>
  </div>
</template>

<script>
  import VideoListItem from './VideoListItem';

  export default {
    name: 'VideoList',
    // props: ['videos'],
    props: {
      videos: Array,
    },
    components: {
      VideoListItem,
    }
  }
</script>

<style>

</style>