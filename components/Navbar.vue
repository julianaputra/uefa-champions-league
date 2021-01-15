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
            <b-nav-item>
              <nuxt-link to="/" tag="li"> Home </nuxt-link>
            </b-nav-item>
            <b-nav-item>
              <nuxt-link to="/standings" tag="li"> Standings </nuxt-link>
            </b-nav-item>
            <b-nav-item>
              <nuxt-link to="/matches" tag="li"> Matches </nuxt-link>
            </b-nav-item>
            <b-nav-item>
              <nuxt-link to="/teams" tag="li"> Teams </nuxt-link>
            </b-nav-item>
            <b-nav-item>
              <nuxt-link to="/favorites_match" tag="li">
                Favorites Match
              </nuxt-link>
            </b-nav-item>
            <b-nav-item>
              <nuxt-link to="/favorites_team" tag="li">
                Favorites Team
              </nuxt-link>
            </b-nav-item>
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
}

.nav-item .nav-link {
  padding-left: 12px !important;
  padding-right: 12px !important;
}

.nav-item .nav-link li {
  font-weight: 600;
  color: #caced3;
}

.nav-item .nav-link .nuxt-link-exact-active {
  color: #11263c;
  font-weight: bold;
  border-bottom: 3px solid #623cea;
}
.navbar-brand {
  /* font-family: 'Lobster', cursive; */
  font-weight: bold;
  color: #623cea !important;
}
</style>
