// this file has to be named exactly like this
import Vue from 'vue';
import App from './App';

// this is another way to tell vue to show somehting inside of 
// the #app div and turn it to html
// the h is a simpol for ( createElement ) fucntion 
//
// they made it as short as possiable with the arrow function
// 
// the .$mount fucnction is the same thing as specifing el: '#app'
new Vue({
  el: '#app',
  render:  h => h(App),
});



