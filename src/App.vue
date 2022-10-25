<template>
  <v-app>
    <v-container>
    <!-- スタイルは本記事のメインではないので雑に設定しています。この辺りもお好みで！ -->
        <v-spacer></v-spacer>

        <div id="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
        </div>
      <router-view/>
    </v-container>
<v-navigation-drawer>
  <side-bar></side-bar>
</v-navigation-drawer>

  </v-app>
  
</template>

<script>
import SideBar from "./components/SideBar";
export default {
  components: { SideBar }
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
