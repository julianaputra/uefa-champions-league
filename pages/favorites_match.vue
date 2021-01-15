<template>
  <div>
    <h1 class="secondary-color">Favorite Match</h1>
    <main>
      <div v-if="matches.length > 0" class="row">
        <app-fav-match-card
          v-for="match in matches"
          :key="match.id"
          :match="match"
          @delete="deleteMatch"
        />
      </div>
      <div v-else class="card">
        <div class="card-body">
          <h2>No match selected</h2>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import FavMatchCard from '../components/favorite_match/FavMatchCard'

export default {
  components: {
    appFavMatchCard: FavMatchCard,
  },
  async asyncData({ $axios }) {
    const data = await $axios.$get('/competitions/2001/matches')
    return { data }
  },
  data() {
    return {
      matches: [],
    }
  },
  computed: {
    favMatch() {
      return this.$store.state.favoriteMatch
    },
  },
  mounted() {
    this.matches = []
    this.$store.state.favoriteMatch.forEach((id) => {
      this.fetch(id)
    })
  },
  methods: {
    fetch(id) {
      this.data.matches.forEach((match) => {
        if (match.id === id) {
          this.matches.push(match)
        }
      })
    },
    deleteMatch(match) {
      this.$store.dispatch('deleteMatch', match)
      this.matches = []
      this.$store.state.favoriteMatch.forEach((id) => {
        this.fetch(id)
      })
    },
  },
  head: {
    titleTemplate: 'Favorite Match | %s',
  },
}
</script>

<style></style>
