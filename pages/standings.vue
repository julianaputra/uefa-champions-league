<template>
  <div>
    <h1>Standings</h1>
    <section>
      <div class="row">
        <div v-for="standing in standings" :key="standing.id" class="col-12">
          <b-card>
            <b-card-body>
              <h2>{{ standing.group.replace(/_/g, ' ') }}</h2>
              <!-- <p>{{ standing.table }}</p> -->
              <b-table hover :items="standing.table" :fields="fields">
              </b-table>
            </b-card-body>
          </b-card>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  /* eslint-disable */
  async asyncData({ params, $axios }) {
    const data = await $axios.$get('/competitions/2001/standings')
    return { data }
  },
  data() {
    return {
      fields: [
        { key: 'position', label: 'Position' },
        { key: 'team.name', label: 'Team' },
        { key: 'playedGames', label: 'Played' },
        { key: 'won', label: 'Won' },
        { key: 'draw', label: 'Drawn' },
        { key: 'goalsFor', label: 'For' },
        { key: 'goalsAgainst', label: 'Against' },
        { key: 'goalDifference', label: 'Goal Difference' },
        { key: 'points', label: 'Points' },
      ],
    }
  },
  computed: {
    standings() {
      const standingsTotal = []
      this.data.standings.forEach((standing) => {
        if (standing.type === 'TOTAL') {
          standingsTotal.push(standing)
        }
      })
      return standingsTotal
    },
  },
  head: {
    titleTemplate: 'Groups & Standings | %s',
  },
}
</script>
