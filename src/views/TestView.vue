<template>
  <div class="page-container">
    <ul>
      <li v-for="rencontre in rencontres" :key="rencontre.age">
            {{rencontre.poule}} / {{rencontre.heureDebut}} / {{rencontre.equipeDom}} / {{rencontre.equipeExt}}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  .md-app {
    max-height: 400px;
    border: 1px solid rgba(#000, .12);
  }

   // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
</style>

<script>

//import rencontresData from "../datas/lesrencontres.json";
import letournoiData from "../datas/letournoi.json";

export default {
  name: 'LastRowFixed',
  data() {
    return {
      // rencontres: rencontresData.lesrencontres,
      rencontres: letournoiData.lesrencontres,
    };
  },
};
</script>