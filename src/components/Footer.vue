<template>
  <div id="app">
    <div class="d-flex align-items-center bg-dark text-light footer_style mt-3 border border-top-light">
        <router-link to="/" class="d-flex justify-content-center align-items-center footer_button bg-warning text-dark"> 
            Home
        </router-link>
        <router-link to="/teams" class="d-flex justify-content-center align-items-center footer_button bg-warning text-dark"> 
            Teams
        </router-link>
        <router-link to="/players" class="d-flex justify-content-center align-items-center footer_button bg-warning text-dark"> 
            Players
        </router-link>
        <router-link to="/teams" class="d-flex justify-content-center align-items-center footer_button bg-warning text-dark"> 
            Schedule
        </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>

.footer_style {
    height: 50px;
    width: @media screen;
}
.footer_button {
    height: 100%;
    width: 25%;
    border-right-style: solid;
    border-left-style: solid;
}
</style>
