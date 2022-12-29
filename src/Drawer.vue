<template>
  <v-navigation-drawer
    id="core-drawer"
    v-model="drawer"
    :dark="barColor !== 'rgba(228, 226, 226, 1), rgba(255, 255, 255, 0.7)'"
    :expand-on-hover="expandOnHover"
    :right="$vuetify.rtl"
    :src="barImage"
    mobile-breakpoint="960"
    app
    width="200"
    v-bind="$attrs"
  >
    <template v-slot:img="props">
      <v-img :gradient="`to bottom, ${barColor}`" v-bind="props"/>
    </template>

    <v-divider class="mb-1" />

    <v-list dense nav>
      <v-list-item>
        <v-list-item-title class="text-h5 Headline">
            <v-btn text to="/" ><img src="./assets/logo.png" alt="LogoFcvl Logo" height="30" />FCVL</v-btn>
        </v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-list-item-subtitle>Futsal Féminin 2023</v-list-item-subtitle>
      </v-list-item>
    </v-list>

    <v-divider class="mb-2" />

    <v-list expand nav >
      <!-- Style cascading bug  -->
      <!-- https://github.com/vuetifyjs/vuetify/pull/8574 -->
      <div />

      <template v-for="(item, i) in computedItems">
        <base-item
          :key="`item-${i}`"
          :item="item"
        />
      </template>

      <!-- Style cascading bug  -->
      <!-- https://github.com/vuetifyjs/vuetify/pull/8574 -->
      <div />

<!--      <v-list-item class="mx-1" v-for="item in computedItems" :key="item.title" link :to="item.to">-->
<!--        <v-list-item-icon>-->
<!--          <v-icon>{{ item.icon }}</v-icon>-->
<!--        </v-list-item-icon>-->

<!--        <v-list-item-content>-->
<!--          <v-list-item-title>{{ item.title }}</v-list-item-title>-->
<!--        </v-list-item-content>-->
<!--      </v-list-item>-->
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  // Utilities
  import {
    mapState,
  } from 'vuex'

  export default {
    name: 'CoreDrawer',

    data: () => ({
      expandOnHover: false,
      items: [
        { title: 'Accueil', icon: 'mdi-view-dashboard', to: '/' },
        { title: 'U15F Poules', icon: 'mdi-view-split-vertical', to: '/U15FPoules' },
        { title: 'U15F Finales', icon: 'mdi-format-line-weight', to: '/U15FFinales' },
        { title: 'SenF Poules', icon: 'mdi-view-split-vertical', to: '/SenFPoules' },
        { title: 'SenF Finales', icon: 'mdi-format-line-weight', to: '/SenFFinales' },
        { title: 'Timeline', icon: 'mdi-timeline-clock-outline', to: '/Timeline' },
      ],
    }),

    computed: {
      ...mapState(['barColor', 'barImage']),
      //...mapState(["#00cae3 !important", "./img/jeanne.jpg"]),
      drawer: {
        get () {
          return this.$store.state.drawer
        },
        set (val) {
          this.$store.commit('SET_DRAWER', val)
        },
      },
      computedItems () {
        return this.items.map(this.mapItem)
      },
    },

    methods: {
      mapItem (item) {
        return {
          ...item,
          children: item.children ? item.children.map(this.mapItem) : undefined,
          title: item.title,
        }
      },
    },
  }
</script>

<style scoped >
.v-list-item {
  margin-right: 2px;
  margin-left: 1px !important;
}
</style>
