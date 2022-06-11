
<script>
export default {
  name: 'NavBar',
  data() {
    return {
     show: false
    };
  },
   methods: {
     updateValue(){
         alert("update Value")
     },
      deleteValue(){
         alert("delete Value")
      },
      toggle(){
          this.show = !this.show
      }
  }
}
</script>

<style>

</style>
<template>
  <div class="container-fluid">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <router-link class="nav-link" to="/home">Home <span class="sr-only">(current)</span></router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/features">Features</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/pricing">Pricing</router-link>
      </li>
      <li class="nav-item dropdown">
        <a @click="toggle" class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown link
        </a>
        <div aria-labelledby="navbarDropdownMenuLink" v-if="show">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
  </div>
        <!-- <button type="button" class="btn btn-success me-2" @click="updateValue()">Update me</button>
        <button type="button" class="btn btn-danger" @click="deleteValue()">Delete me</button> -->

</nav>
  </div>
</template>
