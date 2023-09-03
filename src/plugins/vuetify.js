// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Vuetify
import { createVuetify } from "vuetify";
import { VDataTable } from "vuetify/labs/VDataTable";
import { VSkeletonLoader } from "vuetify/labs/VSkeletonLoader";
export default createVuetify({
    theme: {
        dark: true, // Enable dark mode
      },
    components: {

      VDataTable,
      VSkeletonLoader,
    },
  
  });
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides