<template>
  <div class="container">
    <div class="welcome">
      <h2 class="command">
        <span class="name">Welcome</span>
        <span class="arg">Zcash Network API documentation</span>

      </h2>
    </div>
    <div class="row">
      <div class="col-md">
        <router-link to="/rpclist">Zcash CLI JSON RPC</router-link>
        <p class="zcashd-version">Zcashd version: "zcashd v5.7.0"</p>
        <p class="info">
          Welcome to our comprehensive documentation website for Zcash RPC calls. Here, you'll find everything you need to know about calling Zcashd's more than 100 available RPC methods, including detailed information on how to interact with the blockchain, manage wallets, and more. Whether you're a developer, a Zcash enthusiast, or just looking to learn more about Zcash, our website is your go-to resource for all things Zcash RPC.
        </p>
      </div>
      <div class="col-md">
        <div class="zcash-logo">
          <img alt="Zcash Logo" width="256" src="../assets/zcash.png" />
        </div>
      </div>
    </div>    
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.welcome {
  padding: 14px;
}
h2 {
  font-weight: bold;
  color: #333;
}

.command span {
  display: inline-block;
}

.command .arg {
  font-size: 16px;
  font-weight: medium;
  margin-left: 8px;
  color: #555
}

strong {
  color: #555;
  margin-left: 8px
}
.col {
  padding: 64px;
}

a {
  font-size: 1.6em;
  font-weight: bold;
  text-decoration: none;
  color: #06a;
}
a:hover {
  color: #06e
}

p.zcashd-version {
  color:#777;
  font-weight: bold;
  padding: 6px;
}

.zcash-logo {
  display: block;
  /* margin-right: auto; */
  margin-left: 1.6em;
}


</style>
