<template>
  <div class="col-md-3">
    <div class="card mb-3">
      <div class="card-body text-center">
        <button
          v-if="fav"
          class="btn-fav pt-2"
          style="color: #623cea !important"
        >
          <div class="icon" style="width: 24px">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
          </div>
        </button>
        <button v-else class="btn-fav pt-2" @click="addToFavorite">
          <div class="icon" style="width: 24px">
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
        </button>
        <img
          height="50px"
          :src="team.crestUrl !== null ? team.crestUrl : tmpImg"
          :alt="team.name"
        />
        <h5 class="mt-2 font-weight-bold">{{ team.shortName }}</h5>
        <p class="m-0 text-color" style="font-size: 12px">
          {{ team.area.name }}
        </p>
        <a :href="team.website" class="small">{{ team.website }}</a>
      </div>
      <!-- <div class="card-footer text-right bg-white">
        <button
          v-if="fav"
          class="btn btn-sm btn-info shadow-sm d-flex justify-content-center align-items-center float-right"
        >
          <div class="icon mr-2" style="width: 20px">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
          </div>
          Favorited
        </button>
        <button
          v-else
          class="btn btn-sm btn-secondary shadow-sm d-flex align-items-center float-right"
          @click="addToFavorite"
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
          Add to Favorite
        </button>
      </div> -->
    </div>
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
  data() {
    return {
      tmpImg: '/img/no-team.svg',
    }
  },
  computed: {
    fav() {
      if (this.$store.state.favoriteTeam.includes(this.team.id)) {
        return true
      } else {
        return false
      }
    },
  },
  methods: {
    addToFavorite() {
      this.$store.dispatch('addToFavoriteTeam', this.team.id)
      this.$emit('teamAdded', this.team.name)
    },
  },
}
</script>

<style>
.btn-secondary {
  background-color: #f4f5f6 !important;
  color: #b7bdc4 !important;
  border-color: #f4f5f6 !important;
}
.btn-info {
  background-color: #623cea !important;
  /* color: #b7bdc4 !important; */
  border-color: #623cea !important;
}

.btn-fav {
  position: absolute;
  right: 0;
  top: 0;
  background: none;
  border: none;
  color: #b7bdc4;
}

.btn-fav:focus {
  outline: none;
}

.card {
  border: 2px solid #f6f7f8;
}
</style>
