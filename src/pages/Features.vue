<script>
import axios from "axios";

export default {
  name: "FeaturesComponent",
  data() {
    return{
      headings: [
          "PostId",
          "Id",
          "Name",
          "Email",
          "Body"
      ],
      response: []
    }
  },
  methods: {
   async fetchData() {
      try {
          const ajax = await axios({
          methods: "get",
          url: "https://jsonplaceholder.typicode.com/comments"
        });
        this.response = ajax.data;
      }
      catch(err){
      console.log(err.response)
      }
    },
         deleteRow(index) {
       this.response.splice(index,1)
     }
  // fetchData() {
  //   axios({
  //      methods: "get",
  //     url: "https://jsonplaceholder.typicode.com/comments"
  //   }).then((response)=>{
  //     this.response = (response.data);
  //   })
  //   .catch((err)=>{
  //     console.log(err);
  //   });
  // }
  }
}
</script>

<template>
  <button @click= "fetchData" class="btn btn-primary m-3">Get data</button>
  <div>
      <table class="table table-striped">
        <thead>
    <tr>
      <th>PostId</th>
      <th>Id</th>
      <th>Name</th>
      <th>Email</th>
      <th>body</th>
      <th>Action</th>
    </tr>
  </thead>
       <tbody>
          <tr v-for= "(data,index) in response" :key= "index">
          <td>
            {{data.postId}}
          </td>
          <td>
            {{data.id}}
          </td>
          <td>
            {{data.name}}
          </td>
           <td>
            {{data.email}}
          </td>
           <td>
            {{data.body}}
          </td>
          <td>
            <button class="btn btn-danger" @click="deleteRow(index)">Delete</button>
          </td>
        </tr>
       </tbody>
      </table>
 
  </div>
</template>


