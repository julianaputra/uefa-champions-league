export const state = () => ({
  matches: null,
  teams: null,
  favoriteTeam: [],
  favoriteMatch: [],
})

export const getters = {
  getTeams(state) {
    return state.teams
  },
  getFavoriteTeam(state) {
    return state.favoriteTeam
  },
  getMatches(state) {
    return state.matches
  },
  getFavoriteMatch(state) {
    return state.favoriteMatch
  },
}

export const mutations = {
  setMatches(state, matches) {
    state.matches = matches
  },
  setTeams(state, teams) {
    state.teams = teams
  },
  setFavoriteTeam(state, team) {
    state.favoriteTeam.push(team)
  },
  setFavoriteMatch(state, match) {
    state.favoriteMatch.push(match)
  },
  deleteTeam(state, team) {
    const record = state.favoriteTeam.find((element) => element === team)
    state.favoriteTeam.splice(state.favoriteTeam.indexOf(record), 1)
  },
  deleteMatch(state, match) {
    const record = state.favoriteMatch.find(
      (element) => element.id === match.id
    )
    state.favoriteMatch.splice(state.favoriteMatch.indexOf(record), 1)
  },
}

export const actions = {
  async getMatches({ commit }) {
    await this.$axios.$get('/competitions/2001/matches').then((res) => {
      commit('setMatches', res.matches)
    })
  },
  async getTeams({ commit }) {
    await this.$axios.$get('/competitions/2001/teams').then((res) => {
      commit('setTeams', res.teams)
    })
  },
  addToFavoriteMatch({ commit }, match) {
    commit('setFavoriteMatch', match)
  },
  addToFavoriteTeam({ commit }, team) {
    commit('setFavoriteTeam', team)
  },
  deleteTeam({ commit }, team) {
    commit('deleteTeam', team)
  },
  deleteMatch({ commit }, match) {
    commit('deleteMatch', match)
  },
}
