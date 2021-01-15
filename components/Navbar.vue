<template>
  <div>
    <b-navbar
      toggleable="lg"
      type="light"
      fixed="top"
      style="background-color: #fff"
      class="navbar"
    >
      <b-container>
        <b-navbar-brand>
          <!-- <img width="30px" src="/img/no-team.svg" alt="logo" /> -->
          UEFA</b-navbar-brand
        >

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item to="/"> Home </b-nav-item>
            <b-nav-item to="/standings"> Standings </b-nav-item>
            <b-nav-item to="/matches"> Matches </b-nav-item>
            <b-nav-item to="/teams"> Teams </b-nav-item>
            <b-nav-item to="/favorites_match"> Favorites Match </b-nav-item>
            <b-nav-item to="/favorites_team"> Favorites Team </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<style>
* {
  /* color: #caced3; */
  font-family: 'Roboto';
}

.text-color {
  color: #caced3;
}
.primary-color {
  color: #623cea !important;
}
.secondary-color {
  color: #11263c !important;
}

.navbar {
  border-bottom: 2px solid #f6f7f8;
  padding: 0px !important;
}

.nav-item {
  padding: 0 1.2rem !important;
}

.nav-item .nav-link {
  font-weight: bold;
  color: #caced3 !important;
  border-bottom: 3px solid #fff;
  padding: 0.7rem 0 !important;
}

.nav-item .nuxt-link-exact-active {
  color: #11263c !important;
  font-weight: bold;
  border-bottom: 3px solid #623cea;
}
.navbar-brand {
  /* font-family: 'Lobster', cursive; */
  font-weight: bold;
  color: #623cea !important;
}
</style>
