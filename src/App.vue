<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-nav-icon
        v-on:click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <side-bar></side-bar>
    </v-navigation-drawer>
    <v-spacer>
      <v-container>
        <div id="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
        </div>
        <router-view />
      </v-container>
    </v-spacer>
  </v-app>
</template>

<script>
import SideBar from "./components/SideBar";
export default {
  components: { SideBar },
  data: () => ({
    drawer: false,
    group: null,
  }),
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  a {
    color: #2c3e50;
    text-decoration: none;
  }
}

#nav {
  padding: 30px;

  .router-link-exact-active {
    color: #42b983;
  }
}
</style>
