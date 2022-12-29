<template>
    <v-card
            class="mx-auto"
            max-width="400"
    >
        <v-card dark flat >
            <v-card-title class="pa-2 purple lighten-3">

                <h3 class="text-h6 font-weight-light text-center grow">
                    Timeline
                </h3>
                <v-avatar>
                    <v-img src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"></v-img>
                </v-avatar>
            </v-card-title>
            <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/forest.jpg"
                    gradient="to top, rgba(0,0,0,.44), rgba(0,0,0,.44)"
            >
                <v-container class="fill-height">
                    <v-row align="center">
                        <strong class="text-h1 font-weight-regular mr-6">8</strong>
                        <v-row justify="end">
                            <div class="text-h5 font-weight-light">
                                Monday
                            </div>
                            <div class="text-uppercase font-weight-light">
                                February 2015
                            </div>
                        </v-row>
                    </v-row>
                </v-container>
            </v-img>
        </v-card>
        <v-card-text class="py-0">
            <v-timeline
                    align-top
                    dense
            >
                <v-timeline-item
                        color="pink"
                        small
                >
                    <v-row class="pt-1">
                        <v-col cols="3">
                            <strong>5pm</strong>
                        </v-col>
                        <v-col>
                            <strong>New Icon</strong>
                            <div class="text-caption">
                                Mobile App
                            </div>
                        </v-col>
                    </v-row>
                </v-timeline-item>

                <v-timeline-item
                        color="teal lighten-3"
                        small
                >
                    <v-row class="pt-1">
                        <v-col cols="3">
                            <strong>3-4pm</strong>
                        </v-col>
                        <v-col>
                            <strong>Design Stand Up</strong>
                            <div class="text-caption mb-2">
                                Hangouts
                            </div>
                            <v-avatar>
                                <v-img
                                        src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairFrida&accessoriesType=Kurt&hairColor=Red&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=GraphicShirt&clotheColor=Gray01&graphicType=Skull&eyeType=Wink&eyebrowType=RaisedExcitedNatural&mouthType=Disbelief&skinColor=Brown"
                                ></v-img>
                            </v-avatar>
                            <v-avatar>
                                <v-img
                                        src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&accessoriesType=Prescription02&hairColor=Black&facialHairType=MoustacheMagnum&facialHairColor=BrownDark&clotheType=BlazerSweater&clotheColor=Black&eyeType=Default&eyebrowType=FlatNatural&mouthType=Default&skinColor=Tanned"
                                ></v-img>
                            </v-avatar>
                            <v-avatar>
                                <v-img
                                        src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairMiaWallace&accessoriesType=Sunglasses&hairColor=BlondeGolden&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Surprised&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=Pale"
                                ></v-img>
                            </v-avatar>
                        </v-col>
                    </v-row>
                </v-timeline-item>

                <v-timeline-item
                        color="pink"
                        small
                >
                    <v-row class="pt-1">
                        <v-col cols="3">
                            <strong>12pm</strong>
                        </v-col>
                        <v-col>
                            <strong>Lunch break</strong>
                        </v-col>
                    </v-row>
                </v-timeline-item>

                <v-timeline-item
                        color="teal lighten-3"
                        small
                >
                    <v-row class="pt-1">
                        <v-col cols="3">
                            <strong>9-11am</strong>
                        </v-col>
                        <v-col>
                            <strong>Finish Home Screen</strong>
                            <div class="text-caption">
                                Web App
                            </div>
                        </v-col>
                    </v-row>
                </v-timeline-item>
            </v-timeline>
        </v-card-text>
    </v-card>
</template>



<script>
import axios from 'axios'

export default {
    data() {
      return {
        urlPoule: process.env.BASE_URL + "datas/F_c1_pouleA.json",
        urlEquipe: process.env.BASE_URL + "datas/info_tournoi.json",
        lesmatchsA: [],
        leclassementA: [],
        lesequipeskey: {},
        filteredByQuantityIncome:[
          {
            email: 'myemail',
            currency: 'euro',
            quantity: '25',
            types: 'mytypes',
            totalIncomeAmount: '3',
          },
        ],
        headersMatch: [
          {
            sortable: false,
            text: 'Salle/Heure',
            value: 'id',
            align: 'center',
            class: 'px-1',
            cellClass: 'px-1',
          },
          {
            sortable: false,
            text: 'Equipe Domicile',
            value: 'displayDom.fanion',
            align: 'center',
            class: 'px-1',
            cellClass: 'px-1',
          },
          {
            sortable: false,
            text: 'Score',
            value: 'score',
            align: 'center',
            class: 'font-weight-bold px-0',
            cellClass: 'px-1',
          },
          {
            sortable: false,
            text: 'Equipe Exterieur',
            value: 'displayExt.fanion',
            align: 'center',
            class: 'px-1',
            cellClass: 'px-1',
          },
        ],
        headersClassement: [
          {
            sortable: false,
            text: 'Rang',
            value: 'rang',
            align: 'center',
            class: 'px-1',
            cellClass: 'px-1',
          },
          {
            sortable: false,
            text: 'Points',
            value: 'points',
            align: 'center',
            class: 'font-weight-bold px-1',
            cellClass: 'font-weight-bold px-1',
          },
          {
            sortable: false,
            text: 'Diff Buts',
            value: 'diffbuts',
            align: 'center',
            class: 'font-weight-bold px-1',
            cellClass: 'font-weight-bold px-1',
          },
          {
            sortable: false,
            text: 'Equipe',
            align: 'center',
            value: 'displayEqui.nom',
            class: 'px-1',
            cellClass: 'px-1 text-start',
            mobile: 'false',
          },
          {
            sortable: false,
            text: 'Buts Pour/Contre',
            align: 'center',
            value: 'butsPour',
            class: 'px-1',
            cellClass: 'px-1 text-left',
            mobile: 'false',
          },
        ],
      };
    },
    created() {
      var urlEquipe = this.urlEquipe;
      axios
          .get(urlEquipe)
          .then(response => {
            var equipes = response.data.lesequipes
            for (var n in equipes) {
                this.lesequipeskey[equipes[n].id] = equipes[n]
            }
            //console.log(this.lesequipeskey)
          }).catch(error => {
             console.log(error)
          });

      this.loadDataOds();
    },
    methods: {
        update(){
            this.loadDataOds();
        },
        loadDataOds() {
            var urlPoule = this.urlPoule;
            axios
                .get(urlPoule)
                .then(response => {
                  this.lesmatchsA = response.data.lesmatchs
                  this.leclassementA = response.data.leclassement

                  for (var n in this.lesmatchsA ) {
                    this.lesmatchsA[n].score = this.lesmatchsA[n].equipeDom.but+" - "+this.lesmatchsA[n].equipeExt.but
                    this.lesmatchsA[n].displayDom = this.lesequipeskey[this.lesmatchsA[n].equipeDom.id]
                    this.lesmatchsA[n].displayExt = this.lesequipeskey[this.lesmatchsA[n].equipeExt.id]
                  }

                  for (var z in this.leclassementA ) {
                    this.leclassementA[z].displayEqui = this.lesequipeskey[this.leclassementA[z].id]
                  }

                  //console.log(this.lesmatchsA)
                }).catch(error => {
                   console.log(error)
                })
          },
    },
};
</script>

