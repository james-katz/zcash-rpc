<template>  
    <nav class="navbar navbar-dark bg-dark navbar-expand-md">
      <a class="navbar-brand">ZcashRPC</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMenu" aria-controls="navbarTogglerMenu" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarMenu">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <router-link to="/" class="nav-link">Zcash RPC</router-link>
          </li>
          <li class="nav-item active">
            <router-link to="/rpclist" class="nav-link">Zcash CLI</router-link>
          </li>
        </ul>
      </div>      
    </nav>
  <!-- <div class="container-fluid"> -->
    <router-view/>
  <!-- </div> -->
  
  <footer-component />
  
</template>

<script>
// @ is an alias to /src
import FooterComponent from '@/components/FooterComponent.vue';
export default {
  components: {
    FooterComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;    
}
.navbar {
  padding: 10px;
}
nav a.router-link-exact-active {
  color: #b99700;
  font-weight: bold;
}
</style>
