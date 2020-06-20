<template>
  <v-app>
    <v-tabs>
    <v-tab router :to="{name: 'Menu'}">Menu</v-tab>
    <v-tab router :to="{name: 'OrderList'}">Order List</v-tab>
  </v-tabs>

    <v-content>
      <!-- <HelloWorld /> -->
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    // HelloWorld
  },

  data: () => ({
    //
  })
};
</script>
