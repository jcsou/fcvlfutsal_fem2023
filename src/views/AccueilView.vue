<template>
    <v-container id="accueil" fluid tag="section">
        <v-row>
            <v-col cols="12" sm="6" lg="4">
                <v-card class="mx-auto px-0" max-width="400">
                  <v-img class="mx-auto" max-height="200px" max-width="200px" src="../assets/logo.png" alt="FCVL logo"/>
                  <v-card-text class="text-center px-0">
                    <h3 class="display-2 font-weight-light mb-3 black--text">
                      Tournoi en salle Féminin
                    </h3>
                    <p class="font-weight-light grey--text">Vendredi Soir 06/01/2023</p>
                  </v-card-text>
                  <v-card-actions class="px-0 mx-lg-auto">
                    <v-chip class="ma-2" label link href="pdf/01_ReglementTournoi2023.pdf">
                       <v-icon left>mdi-information-outline</v-icon> Règlement
                    </v-chip>
                    <v-chip class="ma-2" label @click.stop="dialogMap = true">
                       <v-icon left>mdi-map-outline</v-icon> Plan (Accès)
                    </v-chip>
                    <v-chip class="ma-2" label @click.stop="dialogQRcode = true">
                       <v-icon left>mdi-share-variant</v-icon> URL QR Code
                    </v-chip>
                  </v-card-actions>
                </v-card>

                <v-dialog v-model="dialogMap" max-width="500">
                  <v-card class="pa-1">
                    <v-card-title class="text-h5 pa-1">
                        <h3 class="display-2 font-weight-light mb-3 black--text">Plan des salles à la Chartre</h3>
                        <h6 class="display-1">6 Rue Jacques Peletier, 72340 La Chartre-sur-le-Loir</h6>

                    </v-card-title>
                    <v-card-text class="pa-1">
                      <v-img class="mx-auto" max-height="450px" max-width="450px" src="img/PlanAcces.JPG" alt="PlanAcces"/>
                    </v-card-text>
                    <v-card-actions class="pa-1 ">
                      <v-btn color="primary" text link href="https://goo.gl/maps/qaZv9G98zxA4RPsTA" @click="dialogMap = false" target="_blank"><v-icon>mdi-map-marker</v-icon>GoogleMap</v-btn>
                      <v-spacer></v-spacer>
                      <v-btn color="primary" text @click="dialogMap = false">Close</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>

                <v-dialog v-model="dialogQRcode" max-width="500">
                  <v-card class="pa-1">
                    <v-card-title class="text-h5 pa-1">
                        <h3 class="display-2 font-weight-light mb-3 black--text">Partager ce site ...</h3>
                    </v-card-title>
                    <v-card-text class="pa-1">
                      <v-img class="mx-auto" max-height="450px" max-width="450px" src="img/QRsite.png" alt="QRsite"/>
                    </v-card-text>
                    <v-card-actions class="pa-1 ">
                      <v-spacer></v-spacer>
                      <v-btn color="primary" text @click="dialogQRcode = false">Close</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
            </v-col>

            <v-col cols="12" sm="6" lg="4">
                <base-material-card
                      icon="mdi-clipboard-text"
                      title="Senior F/U18F"
                      class="px-5 py-3"
                      color="primary"
                    >
                      <v-simple-table>
                        <template v-slot:default>
                        <thead>
                          <tr>
                            <th width="5%" class="text-center">
                              N°
                            </th>
                            <th width="10%" class="text-center">
                              Fanion
                            </th>
                            <th width="85%" class="text-left">
                              Club
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(equipe, n) in equipesSenF" :key="equipe.id">
                            <td>{{n+1}}</td>
                            <td><v-img  v-bind:src="'img/fanion/'+equipe.fanion" max-height="30" max-width="30"/></td>
                            <td>{{equipe.nom}}<v-spacer></v-spacer></td>
                          </tr>
                        </tbody>
                      </template>
                      </v-simple-table>
                      <v-divider></v-divider>
                      <v-card-actions class="pa-0 ">
                        <v-chip class="ma-2" label link to="/SenFPoules">
                           <v-icon left>mdi-view-split-vertical</v-icon> Poules
                        </v-chip>
                        <v-spacer></v-spacer>
                        <v-chip class="ma-2" label link to="/SenFFinales">
                           <v-icon left>mdi-format-line-weight</v-icon> Finales
                        </v-chip>
                      </v-card-actions>
                    </base-material-card>
            </v-col>

            <v-col cols="12" sm="6" lg="4">
                <base-material-card
                      icon="mdi-clipboard-text"
                      title="U15F"
                      class="px-5 py-3"
                      color="primary"
                    >
                      <v-simple-table>
                        <template v-slot:default>
                        <thead>
                          <tr>
                            <th width="5%" class="text-center">
                              N°
                            </th>
                            <th width="10%" class="text-center">
                              Fanion
                            </th>
                            <th width="85%" class="text-left">
                              Club
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(equipe, n) in equipesU15F" :key="equipe.id">
                            <td>{{n+1}}</td>
                            <td><v-img  v-bind:src="'img/fanion/'+equipe.fanion" max-height="30" max-width="30"/></td>
                            <td>{{equipe.nom}}<v-spacer></v-spacer></td>
                          </tr>
                        </tbody>
                      </template>
                      </v-simple-table>
                      <v-divider></v-divider>
                      <v-card-actions class="pa-0 ">
                        <v-chip class="ma-2" label link to="/U15FPoules">
                           <v-icon left>mdi-view-split-vertical</v-icon> Poules
                        </v-chip>
                        <v-spacer></v-spacer>
                        <v-chip class="ma-2" label link to="/U15FFinales">
                           <v-icon left>mdi-format-line-weight</v-icon> Finales
                        </v-chip>
                      </v-card-actions>
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
        dialogMap: false,
        dialogQRcode: false,
        url: process.env.BASE_URL + "datas/info_tournoi.json",
        equipesSenF: null,
        equipesU15F: null,
      };
    },
    created() {
      this.loadDataOds();
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
                  this.equipesSenF = response.data.lesequipes.filter(function (entry){return entry.categorie_id==='F_c1';})
                  this.equipesU15F = response.data.lesequipes.filter(function (entry){return entry.categorie_id==='U15F_c2';})
                }).catch(error => {
                   console.log(error)
                })
          },

    },
};
</script>