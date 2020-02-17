<template>
  <v-container>
    <v-row>
      <v-col>
        <v-row justify="center" class="ma-0">
          <v-col sm="6" md="6" class="pa-0">
            <h2 class="primary--text">Create a new Meetup</h2>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-row justify="center" class="pa-0 ma-0">
          <v-col sm="6" md="6" class="pa-0 ma-0">
            <v-text-field
              label="Title*"
              outlined
              dense
            ></v-text-field>
            <v-text-field
              label="Location*"
              outlined
              dense
            ></v-text-field>
            <v-text-field
              label="Image URL*"
              outlined
              dense
            ></v-text-field>
            <v-text-field
              label="Description*"
              outlined
              dense
              multi-line
            ></v-text-field>
            <v-textarea
              label="Description*"
              outlined
              dense
              auto-grow
            ></v-textarea>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
