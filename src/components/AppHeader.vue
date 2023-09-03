<template>
  <div>
    <v-app-bar app class="navbar">
      <div class="navbar-content">
        <div
          class="title"
          style="cursor: pointer; color: rgb(232, 216, 216)"
          @click="redirectToRoot"
        >
          {{ consts.TITLE }}
        </div>
        <div class="nav-buttons">
          <v-btn
            variant="text"
            v-for="navItem in navItems"
            :key="navItem.title"
            :href="navItem.route"
            class="nav-item"
            color="#235a95"
          >
            {{ navItem.title }}
          </v-btn>
        </div>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import consts from "../helpers/constants.js";

export default {
  name: "AppHeader",
  data() {
    return {
      consts: consts,
      navItems: [
        { title: consts.HOME, route: "/" },
        { title: consts.EDIT_TEAM_MEMBERS, route: "/myteam" },
        { title: consts.ADMIN, route: "/admin/create-team" },
        { title: consts.COMING_SOON, route: "/coming-soon" },
      ],
    };
  },
  computed: {
    ...mapGetters({
      // userDetails: "osm/getUserDetails",
    }),
  },
  created() {
    //   console.log("Here", this.userDetails);
    //   if (
    //     !this.userDetails.scopes.some((element) => element.includes("osmAdmin"))
    //   ) {
    //     this.navItems = this.navItems.filter(
    //       (item) => item.title !== consts.ADMIN
    //     );
    //   }
  },
  methods: {
    redirectToRoot() {
      this.$router.push("/");
    },
  },
};
</script>

<style>
.align-center {
  align-items: center;
}
.navbar {
  position: fixed;
  top: 0;
  left: 0;

  /* Ensure it's on top of other content */
  /* Add any other styling you need for your header here */
}
.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.title {
  font-size: 1.4rem;
  color: #ffffff;
  font-weight: bold;
  margin-left: 15px;
}

.nav-buttons {
  font-size: 0.7rem;
  display: flex;
  align-items: center;
  gap: 10px;
  right: 0;
}

.nav-item {
  color: #ffffff;
  font-weight: bold;
  text-transform: uppercase;
  padding: 10px 20px;
  position: relative;
  text-decoration: none; /* Remove underline */
}

.nav-item::before {
  content: "";
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #235a95;
  transition: width 0.2s;
}

.nav-item:hover::before {
  width: 100%;
}

/* Optionally, add some margin between the image and title */
.v-list-item-icon {
  margin-right: 10px;
}
</style>
