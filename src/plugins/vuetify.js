import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {customProperties: true,},
    themes: {
      light: {
        primary: "#604d29",
        secondary: "#e1d6b5",
        accent: "#a7b27d",
      },
    },
  },
});
