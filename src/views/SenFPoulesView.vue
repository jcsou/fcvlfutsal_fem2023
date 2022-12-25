<template>
  <v-container id="poules" fluid tag="section" >
  <v-row>
  <v-col>
      <v-card class="mx-auto my-12">
        <v-tabs color="deep-purple accent-4" right>
          <v-tab>Poule A</v-tab>
          <v-tab>Poule B</v-tab>
          <v-tab-item>

            <base-material-card color="primary" class="px-5 py-3">
              <template v-slot:heading>
                <div class="display-2 font-weight-light">Matchs Poule A Senior F et U18F </div>
              </template>
              <v-card-text>
                <v-data-table :headers="headersMatch" :items="lesmatchs" hide-default-footer />
              </v-card-text>
            </base-material-card>


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
                  PouleB a venir
                </p>
              </v-card-text>
            </v-card>
          </v-tab-item>
      </v-tabs>
    </v-card>

  </v-col>
  </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
    data() {
      return {
        urlPoule: process.env.BASE_URL + "datas/F_c1_poule.json",
        urlEquipe: process.env.BASE_URL + "datas/equipes.json",
        lesmatchs: [],
        lesequipes: [],
        headersMatch: [
          {
            sortable: false,
            text: 'ID',
            value: 'id',
          },
          {
            sortable: false,
            text: 'Salle',
            value: 'salle',
          },
          {
            sortable: false,
            text: 'Horaire',
            value: 'heureDebut',
          },
          {
            sortable: false,
            text: 'Equipe Domicile',
            value: 'equipeDom.id',
          },
          {
            sortable: false,
            text: 'Equipe Exterieur',
            value: 'equipeExt.id',
          },
        ],
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
            var urlEquipe = this.urlEquipe;
            axios
                .get(urlEquipe)
                .then(response => {
                  this.lesequipes = response.data.lesequipes
                }).catch(error => {
                   console.log(error)
                });

            var urlPoule = this.urlPoule;
            axios
                .get(urlPoule)
                .then(response => {
                  this.lesmatchs = response.data.lesmatchs

                  for (var n in this.lesmatchs) {
                      this.lesmatchs[n].displayDom = this.lesmatchs[n].equipeDom.id + "lal"
                      this.lesmatchs[n].displayExt = this.lesmatchs[n].equipeExt.id + "lil"



                      console.log(this.lesmatchs[n])
                  }

                }).catch(error => {
                   console.log(error)
                })
          },

    },
};
</script>