<template>
  <v-app  class="main-styling">
    <AppHeader />
    <v-main
      style="
        font-family: Poppins, 'Roboto', Helvetica, Arial, sans-serif;
        background-color: #f8f8fb;
        font-size: 14px !important;
      "
      class="mt-16 pt-2 ml-4 mb-4"
    >
      <router-view />
    </v-main>
  </v-app>
</template>


<script>
import { mapGetters } from "vuex";
// import anime from "animejs";
import AppHeader from "./components/AppHeader";

// import { isLocalHost } from "@/helpers";

export default {
  name: "App",
  components: {
    AppHeader,

  },
  data: () => ({
    count: 0,
    dots: "",
    envType: "",
  }),
  methods: {
    updateLoadingText() {
      this.count = (this.count + 1) % 4;
      this.dots = ".".repeat(this.count);
    },
    // isLocalHost,
  },
  computed: {
    ...mapGetters({
      // loadingUser: "osm/getUserLoading",
    }),
  },
  created() {
    // this.$store.dispatch("osm/getUserDetails");
  },
};
</script>

<style scoped>
.app__loading-spinner,
.app__noScriptMessage {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 200px;
  font-size: 14px;
  font-family: "Poppins";
  font-weight: 500;
}
div#dashboardLoading {
  margin-top: 200px;
  margin-bottom: 2em;
}
div#dashboardError {
  margin-top: 200px;
  margin-bottom: 2em;
  display: none;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 700;
  font-style: italic;
  color: #c00000;
  text-align: center;
}
.spacer {
  margin-top: 26px;
}
.main-styling {
  font-family: Poppins, Arial, Helvetica, sans-serif;
  font-size: 8px !important;
  padding: 0;
  margin: 0;
}
.v-ripple__container {
  display: none !important;
}
@keyframes shine {
  to {
    background-position: 200% center;
  }
}
.sparkling-text {
  background: linear-gradient(
    to right,
    black 20%,
    #000 40%,
    #fff 50%,
    #000 80%
  );
  background-size: 200% auto;
  color: #000;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 3s linear infinite;
}
</style>