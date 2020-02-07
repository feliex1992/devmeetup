<template>
  <v-container fluid>
    <v-row wrap>
      <v-col cols="12">
        <v-row
          justify="center"
        >
          <v-card
            class="ma-2"
          >
            <v-btn large router to="/meetups" class="info">Explore Meetups</v-btn>
          </v-card>
          <v-card
            class="ma-2"
          >
            <v-btn large router to="/meetup/new" class="info">Organize Meetup</v-btn>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
    <v-row wrap justify="center" class="px-10">
      <v-card max-width="444" class="mx-auto">
        <v-carousel
          cycle
          show-arrows-on-hover
        >
          <v-carousel-item
            v-for="item in items"
            :key="item.id"
            :src="item.src"
          >
            <v-row
              class="fill-height"
              justify="center"
              align="end"
            >
              <div class="display-1 mb-12">{{ item.title }}</div>
            </v-row>
          </v-carousel-item>
        </v-carousel>
      </v-card>
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
