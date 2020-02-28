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
              v-model="title"
            ></v-text-field>
            <v-text-field
              label="Location*"
              outlined
              dense
              v-model="location"
            ></v-text-field>
            <v-text-field
              label="Image URL*"
              outlined
              dense
              v-model="imageUrl"
            ></v-text-field>
            <img class="mb-5" :src="imageUrl" height="200">
            <v-textarea
              label="Description*"
              outlined
              dense
              auto-grow
              v-model="description"
            ></v-textarea>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <form @submit.prevent="onCreateMeetup">
      <v-row>
        <v-col>
          <v-row justify="center" class="ma-0">
            <v-col sm="6" md="6" class="pa-0">
              <v-btn
                class="primary"
                :disabled="!formIsValid"
                type="submit"
              >Create Meetup</v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </form>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      location: '',
      imageUrl: '',
      description: ''
    }
  },
  computed: {
    formIsValid () {
      return this.title !== '' &&
        this.location !== '' &&
        this.imageUrl !== '' &&
        this.description !== ''
    }
  },
  methods: {
    onCreateMeetup () {
      if (!this.formIsValid) {
        return
      }
      const meetupData = {
        title: this.title,
        location: this.location,
        imageUrl: this.imageUrl,
        description: this.description,
        date: new Date()
      }
      this.$store.dispatch('createMeetup', meetupData)
      this.$router.push('/meetups')
    }
  }
}
</script>
