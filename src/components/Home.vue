<template>
  <v-container>
    <v-layout row wrap class="primary">
      <v-flex xs12 sm6 class="text-sm-center">
        <v-btn large router to="/meetups">Explor Meetups</v-btn>
      </v-flex>
      <v-flex xs12 sm6>
        <v-btn large router to="/meetup/new">Organize Meetup</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      alignmentsAvailable: [
        'start',
        'center',
        'end',
        'baseline',
        'stretch'
      ],
      alignment: 'center',
      dense: false,
      justifyAvailable: [
        'start',
        'center',
        'end',
        'space-around',
        'space-between'
      ],
      justify: 'center'
    }
  }
}
</script>
