<script>
import NavBar from './components/NavBar.vue';
// import TableData from './components/TableData.vue';

export default {
  name: "App",
  components: {
    NavBar,
    
    // TableData

  },
   data(){
    return {
      selected: ''
    }
  }
}
</script>

<style>
@import 'bootstrap/dist/css/bootstrap.min.css';
@import 'font-awesome/css/font-awesome.min.css';
@import 'animate.css'
</style>
<template>
  <div id="app">
    <NavBar/>
    <router-view/>
    <!-- <TableData/> -->
  <!-- <div>Selected: {{ selected }}</div>

<select v-model="selected">
  <option disabled value="">Please select one</option>
  <option>A</option>
  <option>B</option>
  <option>C</option>
</select> -->
  </div>
</template>


