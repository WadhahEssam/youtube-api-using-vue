<template>
  <div>
    <h1>Search In Youtube</h1>
    <SearchBar @termChangedEvent="termChanged" />
    <VideoList :videos="videos" />
  </div>
</template>

<script>
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList'
import searchYoutube from 'youtube-api-v3-search';
const API_KEY = 'AIzaSyBKEiICVjCPdwpnaJhvdTf1zWvJc4suiQQ';

export default {
  name: 'App',
  // do not forget to register the compnent
  // it is not like react where all you have
  // to do is to import the component  
  components: {
    SearchBar,
    VideoList
  },
  data() {
    return {
      term: '',
      videos: [],
    }
  },
  methods: {
    async termChanged(term) {
      this.term = term;
      let videos = await searchYoutube(API_KEY, {
        q: term,
        part: 'snippet',
        type:'video',
      });
      this.videos = videos.items;
    }
  }
}
</script>

