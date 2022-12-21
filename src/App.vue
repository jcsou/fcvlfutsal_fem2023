<template>
  <v-app>
    <v-app-bar color="green" class="flex-grow-0" app dark>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <!-- Start of app toolbar -->
        <v-toolbar >
          <v-toolbar-title class="headline text-uppercase">
              Vuetify Demo
          </v-toolbar-title>

          <v-spacer></v-spacer>

          <v-toolbar-items class="hidden-sm-and-down">
            <v-btn text to="/" exact>Home</v-btn>
            <v-btn text to="/about">About</v-btn>
            <v-btn text to="/test">Test</v-btn>
          </v-toolbar-items>
        </v-toolbar>
      <!-- End of app toolbar -->
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> Learning Vuetify </v-list-item-title>
          <v-list-item-subtitle> Navigation drawers</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense nav>
          <v-list-item v-for="item in items" :key="item.title" :to="item.route" link >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <!-- Display view pages here based on route -->
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    drawer: false,
    items: [
      { title: 'Home', icon: 'mdi-view-dashboard', route: '/' },
      { title: 'About', icon: 'mdi-account-box', route: '/about' },
      { title: 'Test', icon: 'mdi-cog', route: '/test' },
      { title: 'RegularTables', icon: 'mdi-cog', route: '/RegularTables' },
      { title: 'Dashboard', icon: 'mdi-cog', route: '/Dashboard' },
    ],
  }),
};
</script>
