<template>
  <div>
    <h1>Search In Youtube</h1>
    <SearchBar @termChangedEvent="termChanged"></SearchBar>
  </div>
</template>

<script>
import SearchBar from './components/SearchBar';
import searchYoutube from 'youtube-api-v3-search';
const API = 'AIzaSyBKEiICVjCPdwpnaJhvdTf1zWvJc4suiQQ';

export default {
  name: 'App',
  // do not forget to register the compnent
  // it is not like react where all you have
  // to do is to import the component  
  components: {
    SearchBar
  },
  methods: {
    async termChanged(term) {
      let videos = await searchYoutube(API,{
        q: term,
        part: 'snippet',
        type:'video',
      });
      console.log(videos);
    }
  }
}
</script>

