import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      { id: '00000001', title: 'Squirrel eat nut', src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg', date: '2017-07-17' },
      { id: '00000002', title: 'Sky view the beatifull', src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg', date: '2017-07-19' },
      { id: '00000003', title: 'Bird clean his mout', src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg', date: '2017-07-20' },
      { id: '00000004', title: 'Planets at the universe', src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg', date: '2017-07-21' },
      { id: '00000005', title: 'Meetup bandung', src: 'https://blog-media.lifepal.co.id/wp-content/uploads/2019/03/29152916/20-Tempat-Wisata-di-Bandung-Terbaru-yang-Mesti-Kamu-Datengi-Nih.jpg', date: '2020-02-13' }
    ],
    user: {
      id: 'usr001',
      registeredMeetups: ['00000001']
    }
  },
  mutations: {},
  actions: {},
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    }
  }
})
