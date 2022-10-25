<template>
    <v-app>
        <div class="sidebar-container">
        <h1>MENU</h1>
        <nav-list/>
    </div>
    </v-app>
</template>

<script>
import NavList from './NavList.vue'
export default {
  name: 'SideBar',
  components: {
    NavList
  },
}
</script>
<style>
.sidebar-container {
width: 100%;
background: #fff;
}
.sidebar-container h1 {
border-bottom: 1px solid #40b983;
padding: 20px 0;
color: #40b983;
}
</style>
