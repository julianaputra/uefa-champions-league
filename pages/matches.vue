<template>
  <div>
    <h1 class="secondary-color">Matches</h1>
    <h5 class="text-color">Match kick-offs are listed in your local time</h5>
    <section v-for="gr in group" :key="gr" class="mb-5">
      <div
        class="alert d-flex justify-content-center w-full"
        style="background-color: #a18deb"
      >
        <h6 class="m-0 font-weight-bold text-white">
          {{ gr.replace(/_/g, ' ') }}
        </h6>
      </div>
      <div class="row">
        <app-match-card
          v-for="match in filteredGroup(gr)"
          :key="match.id"
          :match="match"
          @matchAdded="showAlert"
        />
      </div>
    </section>

    <transition name="slide" mode="out-in">
      <b-alert
        style="position: fixed; z-index: 999; left: 0; right: 0; top: 70px"
        class="container"
        :show="dismissCountDown"
        variant="warning"
        @dismissed="dismissCountDown = 0"
        @dismiss-count-down="countDownChanged"
      >
        Match added to favorite
      </b-alert>
    </transition>
  </div>
</template>

<script>
import MatchCard from '../components/matches/MatchCard'

export default {
  components: {
    appMatchCard: MatchCard,
  },
  async asyncData({ params, $axios }) {
    const data = await $axios.$get('/competitions/2001/matches')
    return { data }
  },
  data() {
    return {
      dismissSecs: 2,
      dismissCountDown: 0,
    }
  },
  computed: {
    // Get stage name
    group() {
      const group = []
      this.data.matches.forEach((element) => {
        group.push(element.stage)
      })
      const newGroup = []
      group.forEach((element) => {
        if (newGroup.includes(element) === false) {
          newGroup.push(element)
        }
      })
      return newGroup.reverse()
    },
  },
  methods: {
    // Grouping match by stage
    filteredGroup(group) {
      return this.data.matches.filter((match) => {
        return match.stage === group
      })
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs
    },
  },
  head: {
    titleTemplate: 'Matches | %s',
  },
}
</script>

<style></style>
