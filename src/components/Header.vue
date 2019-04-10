<template>
  <div id="app">
    <b-navbar class="bg-info" toggleable="lg" type="dark" variant="info" top="fixed">
      <b-navbar-brand href="#">
        <img class="logo" src="../assets/Overwatch_League_logo.svg">
        Overwatch League API
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Teams</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav>
          <b-nav-item href="#">Players</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav>
          <b-nav-item href="#">Schedule</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template slot="button-content">
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Messages</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search the site..."></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.logo {
  height: 50px;
  width: 50px;
}

.custom_bg_color {
  background-color:rgb(241, 144, 16);
}
</style>

