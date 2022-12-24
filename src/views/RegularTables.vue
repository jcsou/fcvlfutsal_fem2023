<template>
  <v-container
    id="regular-tables"
    fluid
    tag="section"
  >

    <base-material-card
      icon="mdi-clipboard-text"
      title="Senior F/U18F"
      class="px-5 py-3"
      color="primary"
    >
      <v-simple-table>
        <thead>
          <tr>
            <th class="primary--text">N°</th>
            <th class="primary--text"></th>
            <th class="primary--text">Nom</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(equipe, n) in equipes" :key="equipe.id">
            <td>{{n+1}}</td>
            <td><v-img  v-bind:src="'img/fanion/'+equipe.fanion" max-height="30" max-width="30"/></td>
            <td width="100%" >{{equipe.nom}}</td>
          </tr>
          <tr colspan="3">
            <td>
              button
            </td>
          </tr>
        </tbody>
      </v-simple-table>
    </base-material-card>

  </v-container>
</template>

<script>
import axios from 'axios'

export default {
    data() {
      return {
        categorie: "U11",
        url: process.env.BASE_URL + "datas/equipes.json",
        equipes: null,
      };
    },
    created() {
      this.loadDataOds();
      // this.timer = setInterval(this.loadDataOds, 10000);
    },
    methods: {
        update(){
            this.loadDataOds();
        },
        loadDataOds() {
            var url = this.url;
            axios
                .get(url)
                .then(response => {
                  this.equipes = response.data.lesequipes
                }).catch(error => {
                   console.log(error)
                })
          },

    },
};
</script>


