<template>
  <div class="col-md-6">
    <div class="card shadow-sm mb-3">
      <div class="card-body text-center">
        <p>{{ match.group }}</p>
        <p>{{ new Date(match.utcDate) | formatDate }}</p>
        <div class="row align-items-center">
          <div
            class="col d-flex justify-content-between align-items-center flex-column"
          >
            <!-- <img height="50px" :src="homeTeam.crestUrl" :alt="homeTeam.name" /> -->
            <h6 class="m-0">{{ match.homeTeam.name }}</h6>
          </div>
          <div class="col d-flex justify-content-center align-items-center">
            <h2 class="font-weight-bold mb-0">
              {{
                match.score.fullTime.homeTeam !== null
                  ? match.score.fullTime.homeTeam
                  : '-'
              }}
              :
              {{
                match.score.fullTime.awayTeam !== null
                  ? match.score.fullTime.awayTeam
                  : '-'
              }}
            </h2>
          </div>
          <div
            class="col d-flex justify-content-between align-items-center flex-column"
          >
            <!-- <img height="50px" :src="awayTeam.crestUrl" :alt="awayTeam.name" /> -->
            <h6 class="m-0">{{ match.awayTeam.name }}</h6>
          </div>
        </div>
      </div>
      <div class="card-footer bg-white">
        <button
          class="btn btn-sm btn-danger shadow-sm d-flex align-items-center float-right"
          @click="showModal"
        >
          <div class="icon mr-2" style="width: 20px">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
          </div>
          DELETE
        </button>
      </div>
    </div>

    <b-modal ref="my-modal" hide-footer title="Are you sure?">
      <div class="d-block text-center">
        <p>You will remove this match from favorite</p>
      </div>
      <div class="modal-footer">
        <b-button
          class="d-inline-block"
          variant="outline-warning"
          @click="hideModal"
          >Cancel</b-button
        >
        <b-button
          class="d-inline-bloc"
          variant="outline-danger"
          @click="deleteMatch"
          >Delete</b-button
        >
      </div>
    </b-modal>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  filters: {
    formatDate(value) {
      return moment(String(value)).format('dddd, D MMMM YYYY, h:mm a')
    },
  },
  props: {
    match: {
      type: Object,
      required: true,
    },
  },
  methods: {
    deleteMatch() {
      this.$emit('delete', this.match.id)
    },
    showModal() {
      this.$refs['my-modal'].show()
    },
    hideModal() {
      this.$refs['my-modal'].hide()
    },
  },
}
</script>
