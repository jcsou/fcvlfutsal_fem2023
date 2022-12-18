<template>
  <v-card :loading="loading" class="mx-auto my-12">
    <v-tabs color="deep-purple accent-4" right>
        <v-tab>Match</v-tab>
        <v-tab>Classement</v-tab>
<button @click="update()" class="btn btn-default pull-right " style="height=15px;"><i _ngcontent-pro-c19="" class="material-icons icon-image-preview">loop</i></button>
        <v-tab-item>
            <v-card flat>
              <v-card-text>
                <p>
                  Match
                </p>
              </v-card-text>
            </v-card>
        </v-tab-item>
        <v-tab-item>
            <v-card flat>
              <v-card-text>
                  <p>
                    Classement
                  </p>
                  <ul>
                    <li v-for="equipe in equipes" :key="equipe.id">
                          {{equipe.name}}/ {{equipe.poule}}
                    </li>
                  </ul>
              </v-card-text>
            </v-card>
        </v-tab-item>
    </v-tabs>
  </v-card>
</template>

<script>
import axios from 'axios'

export default {
    data() {
      return {
        categorie: "U11",
        url: process.env.BASE_URL + "datas/letournoi.json",
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