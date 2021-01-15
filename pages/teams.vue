<template>
  <div>
    <h1 class="secondary-color">Teams</h1>
    <transition name="slide" mode="out-in">
      <b-alert
        style="position: fixed; z-index: 999; left: 0; right: 0; top: 70px"
        class="container"
        :show="dismissCountDown"
        variant="warning"
        @dismissed="dismissCountDown = 0"
        @dismiss-count-down="countDownChanged"
      >
        {{ addedTeam }} added to favorite
      </b-alert>
    </transition>
    <div class="row">
      <app-team-card
        v-for="team in data.teams"
        :key="team.id"
        :team="team"
        @teamAdded="showAlert"
      />
    </div>
  </div>
</template>

<script>
import TeamCard from '../components/teams/TeamCard'

export default {
  components: {
    appTeamCard: TeamCard,
  },
  async asyncData({ params, $axios }) {
    const data = await $axios.$get('/competitions/2001/teams')
    return { data }
  },
  data() {
    return {
      dismissSecs: 2,
      dismissCountDown: 0,
      addedTeam: null,
    }
  },
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert(team) {
      this.addedTeam = team
      this.dismissCountDown = this.dismissSecs
    },
  },
  head: {
    titleTemplate: 'Teams | %s',
  },
}
</script>

<style></style>
