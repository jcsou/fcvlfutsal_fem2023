<template>
    <v-container id="accueil" fluid tag="section">
        <v-row>
            <v-col class="text-center">
                <h1 >Tournoi en salle Féminin du FC Val Du Loir</h1>
                <h2 >Vendredi 06/01/2023</h2>
            </v-col>
        </v-row>

        <v-row>
            <v-col class="text-center d-flex flex-column align-center justify-center" >
                <v-img max-height="200px" max-width="200px" src="../assets/logo.png" align="center" alt="FCVL logo"/>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" sm="6" lg="4">
                <base-material-stats-card
                        color="primary"
                        icon="mdi-view-split-vertical"
                        title="Website Visits"
                        value="75.521"
                        sub-icon="mdi-tag"
                        sub-text="Tracked from Google Analytics"
                />
            </v-col>
            <v-col cols="12" sm="6" lg="4">
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
            <v-col cols="12" sm="6" lg="3">
                <base-material-stats-card
                        color="purple"
                        icon="mdi-information-outline"
                        title="Fairplay..."
                        value="INFOS"
                        sub-icon="mdi-tag"
                        sub-text="Tracked from Google Analytics"
                >
    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="reserve"
      >
        Reserve
      </v-btn>
    </v-card-actions>
                </base-material-stats-card>
            </v-col>
        </v-row>
    </v-container>
</template>
