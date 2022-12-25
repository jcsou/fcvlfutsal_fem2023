<template>
  <v-container
    id="regular-tables"
    fluid
    tag="section"
  >
    <v-row>
    <v-col>
    <base-material-card
      icon="mdi-clipboard-text"
      title="Senior F/U18F"
      class="px-5 py-3"
      color="primary"
    >
      <v-simple-table>
        <thead>
          <tr>
            <th class="primary--text"></th>
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
              <v-btn color="primary" rounded class="mr-0">Poules</v-btn> <v-btn color="primary" rounded class="mr-0">Finales</v-btn>
            </td>
          </tr>
        </tbody>
      </v-simple-table>
    </base-material-card>
    </v-col>
    <v-col>
    <base-material-card
            class="v-card-profile"
            avatar="https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg"
    >
      <v-card-text class="text-center">
        <h6 class="display-1 mb-1 grey--text">
          CEO / CO-FOUNDER
        </h6>

        <h4 class="display-2 font-weight-light mb-3 black--text">
          Alec Thompson
        </h4>

        <p class="font-weight-light grey--text">
          Dont be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens bed design but the back is...
        </p>

        <v-btn
                color="primary"
                rounded
                class="mr-0"
        >
          Follow
        </v-btn>
      </v-card-text>
    </base-material-card>
    </v-col>
    </v-row>
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


