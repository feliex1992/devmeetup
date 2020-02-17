<template>
  <v-container fluid>
      <v-row
        justify="center"
        class="mt-4"
      >
        <v-card
          class="mb-2 mx-4">
          <v-btn large router to="/meetups" class="info" width="170px">Explore Meetups</v-btn>
        </v-card>
        <v-card
          class="mb-2 mx-4"
        >
          <v-btn large router to="/meetup/new" class="info" width="170px">Organize Meetup</v-btn>
        </v-card>
      </v-row>
      <v-row
        wrap
        justify="center"
      >
        <v-col
          cols="12"
          md="7"
        >
          <v-row>
            <v-carousel
              cycle
              show-arrows-on-hover
              style="cursor: pointer;"
            >
              <v-carousel-item
                v-for="item in meetups"
                :key="item.id"
                :src="item.src"
                @click="onLoadMeetup(item.id)"
              >
                <v-row justify="center">
                  <div class="title">{{ item.title }}</div>
                </v-row>
              </v-carousel-item>
            </v-carousel>
          </v-row>
        </v-col>
      </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    meetups () {
      return this.$store.getters.featuredMeetups
    }
  },
  methods: {
    onLoadMeetup (id) {
      this.$router.push('/meetups/' + id)
    }
  }
}
</script>

<style scoped>
  .title {
    position: absolute;
    bottom: 50px;
    background-color: rgba(0, 0, 0, 0.3);
    color: white;
    font-size: 2em;
    padding: 10px;
  }
</style>
