<template>
  <v-container>
    <v-row
      v-for="meetup in meetups"
      :key="meetup.id"
    >
      <v-col
        md="12"
      >
        <v-card class="px-3">
          <v-row>
            <v-col
              cols="auto"
              md="3"
            >
              <v-img
                :src="meetup.src"
                height="130px"
              ></v-img>
            </v-col>
            <v-col
              cols="auto"
              class="pa-0"
            >
              <v-card-title>
                <div>
                  <h5>{{ meetup.title }}</h5>
                  <div>
                    <h6>{{ meetup.date }}</h6>
                  </div>
                </div>
              </v-card-title>
              <v-card-action>
                <v-btn text class="ma-2" :to="'/meetups/' + meetup.id">
                  <v-icon>mdi-arrow-right</v-icon>
                  View Meetup
                </v-btn>
              </v-card-action>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    meetups () {
      return this.$store.getters.loadedMeetups
    }
  }
}
</script>
