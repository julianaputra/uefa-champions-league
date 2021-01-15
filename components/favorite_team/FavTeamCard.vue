<template>
  <div class="col-md-3">
    <div class="card mb-3">
      <div class="card-body text-center">
        <div class="circle">
          <img height="50px" :src="team.crestUrl" :alt="team.name" />
        </div>
        <h5>{{ team.shortName }}</h5>
        <small>{{ team.area.name }}</small>
        <br />
        <a :href="team.website" class="small">{{ team.website }}</a>
      </div>
      <div class="card-footer text-right bg-white">
        <button
          class="btn btn-sm btn-danger shadow-sm d-flex align-items-center float-right"
          @click="showModal"
        >
          <div class="icon mr-2" style="width: 20px">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          DELETE
        </button>
      </div>
    </div>

    <b-modal ref="my-modal" hide-footer title="Are you sure?">
      <div class="d-block text-center">
        <p>You will remove '{{ team.shortName }}' from favorite</p>
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
          @click="deleteTeam"
          >Delete</b-button
        >
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: {
    team: {
      type: Object,
      required: true,
    },
  },
  methods: {
    deleteTeam() {
      this.$emit('delete', this.team.id)
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
