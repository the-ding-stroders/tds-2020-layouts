import '@fortawesome/fontawesome-free/css/all.css';
import Vue from 'vue';
import vuetify from '../../extension/plugins/vuetify';
import App from './Streamers.vue';

new Vue({ // eslint-disable-line no-new
  vuetify,
  el: '#app',
  render: (h) => h(App),
});
