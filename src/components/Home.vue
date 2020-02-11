<template>
  <v-container fluid>
      <v-row
        justify="center"
        class="mt-4"
      >
        <v-card
          class="mx-3">
          <v-btn large router to="/meetups" class="info">Explore Meetups</v-btn>
        </v-card>
        <v-card
          class="mx-3"
        >
          <v-btn large router to="/meetup/new" class="info">Organize Meetup</v-btn>
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
            >
              <v-carousel-item
                v-for="item in items"
                :key="item.id"
                :src="item.src"
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
  data () {
    return {
      items: [
        { id: '00000001', title: 'Squirrel eat nut', src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg' },
        { id: '00000002', title: 'Sky view the beatifull', src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg' },
        { id: '00000003', title: 'Bird clean his mout', src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg' },
        { id: '00000004', title: 'Planets at the universe', src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg' }
      ]
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
