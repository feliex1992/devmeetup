<template>
  <v-container>
    <v-row>
      <v-col
        sm="12"
      >
        <v-card>
          <v-card-title>{{ meetup.title }}</v-card-title>
          <v-img
            height="400px"
            :src="meetup.src"
          >
          </v-img>
          <v-card-text>
            <div class="info--text">{{ meetup.date }} - Where it takes place</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore sed obcaecati sequi assumenda quos earum ullam, perspiciatis nulla. Maiores voluptatum quam reiciendis officia accusamus animi quo vel, enim maxime reprehenderit?</div>
          </v-card-text>
          <v-row class="ma-0" justify="end">
            <v-card-action>
            <v-btn class="primary ma-3">Register</v-btn>
          </v-card-action>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    meetup () {
      return this.$store.getters.loadedMeetup(this.id)
    }
  }
}
</script>
