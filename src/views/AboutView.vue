<template>
  <v-container>

    <v-row justify="space-around">
      <h1 class="display-1">v-icon mdi</h1>
      <v-icon
              large
              color="green darken-2"
      >
        mdi-domain
      </v-icon>

      <v-icon
              large
              color="blue darken-2"
      >
        mdi-message-text
      </v-icon>

      <v-icon
              large
              color="purple darken-2"
      >
        mdi-dialpad
      </v-icon>

      <v-icon
              large
              color="teal darken-2"
      >
        mdi-email
      </v-icon>

      <v-icon
              large
              color="blue-grey darken-2"
      >
        mdi-call-split
      </v-icon>

      <v-icon
              large
              color="orange darken-2"
      >
        mdi-arrow-up-bold-box-outline
      </v-icon>
    </v-row>

  </v-container>
</template>

<script>
import { mdiAccount } from "@mdi/js";

export default {
  data: () => ({
    icons: {
      mdiAccount
    }
  })
};
</script>
