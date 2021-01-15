<template>
  <div>
    <h1 class="secondary-color">Favorite Team</h1>
    <main>
      <div v-if="teams.length > 0" class="row">
        <app-fav-team-card
          v-for="team in teams"
          :key="team.id"
          :team="team"
          @delete="deleteTeam"
        />
      </div>
      <div v-else class="card">
        <div class="card-body">
          <h2>No team selected</h2>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import FavTeamCard from '../components/favorite_team/FavTeamCard'

export default {
  components: {
    appFavTeamCard: FavTeamCard,
  },
  async asyncData({ $axios }) {
    const data = await $axios.$get('/competitions/2001/teams')
    return { data }
  },
  data() {
    return {
      teams: [],
    }
  },
  computed: {
    favTeam() {
      return this.$store.state.favoriteTeam
    },
  },
  mounted() {
    this.isLoading = true
    this.teams = []
    this.$store.state.favoriteTeam.forEach((id) => {
      this.fetch(id)
    })
  },
  methods: {
    fetch(id) {
      this.data.teams.forEach((team) => {
        if (team.id === id) {
          this.teams.push(team)
        }
      })
    },
    deleteTeam(team) {
      this.$store.dispatch('deleteTeam', team)
      this.teams = []
      this.$store.state.favoriteTeam.forEach((id) => {
        this.fetch(id)
      })
    },
  },
  head: {
    titleTemplate: 'Favorite Team | %s',
  },
}
</script>

<style></style>
