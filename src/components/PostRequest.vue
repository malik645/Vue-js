<script>
import axios from "axios";
export default {
  name: "PostRequest",
  data() {
    return {
      save: false,
      id: '',
      cardIndex: '',
      userId: "",
      title: "",
      body: "",
      response: [],
      loader: false,
    };
  },
  methods: {
    async post(e) {
      e.preventDefault();
      this.loader = true;
      try {
        const response = await axios({
          method: "post",
          url: "https://jsonplaceholder.typicode.com/posts",
          data: {
            userId: this.userId,
            title: this.title,
            body: this.body,
          },
        });
        this.loader = false;
        this.response.push(response.data);
         
      } catch (err) {
        console.log("error at push data");
      }
      this.loader = false;
    
    },
    async deleteRequest(data, index) {
      let string = JSON.stringify(data);
      let deleteData = JSON.parse(string);
      let id = deleteData.id;
      try {
        await axios({
          method: "delete",
          url: "https://jsonplaceholder.typicode.com/posts/" + id,
        });
        this.response.splice(index, 1);
      } catch (err) {
        console.log(err);
      }
    },
    edit(data, index){
      this.save = true;
       let string = JSON.stringify(data);
      let editData = JSON.parse(string);
      this.userId = editData.userId;
      this.title = editData.title;
      this.body = editData.body;
      this.cardIndex = index;
      this.id = editData.id;
    },
    reset(){
         this.userId = '';
      this.title = '';
      this.body = '';
      this.save = false;
    },
    async update(e){
      e.preventDefault();
      this.loader = true;
      try{
         const response = await axios({
          method: "put",
          url: "https://jsonplaceholder.typicode.com/posts/1",
          data: {
            id: this.id,
            userId: this.userId,
            title: this.title,
            body: this.body,
          },
        });
        this.loader = false;
        this.response[this.cardIndex] = response.data;
      }
      catch(err){
        console.log("error at update data");
      }
    }
  },
};
</script>

<template>
  <div class="bg-light min-vh-100 container-fluid">
    <div class="row">
      <div class="col-md-3 bg-dark min-vh-100">
        <h2 class="text-white">Vue js Post Requests</h2>
        <form @submit="(event)=>save ? update(event) : post(event)">
          <input
            v-model="userId"
            type="number"
            placeholder="user id"
            class="form-control mb-3"
          />
          <input
            v-model="title"
            type="text"
            placeholder="title"
            class="form-control mb-3"
          />
          <textarea
            v-model="body"
            placeholder="post"
            class="form-control mb-3"
          ></textarea>
          
          <button class="btn btn-primary" type="submit" v-if="!save">Create</button>
          <button class="btn btn-success" type="submit" v-if="save">Save</button>
          <button class="btn btn-info ms-2" type="button" v-if="save" @click="reset">Reset</button>
        </form>
      </div>
      <div class="col-md-9 p-5">
        <div
          class="card shadow-sm mb-5 animate__animated animate__backInDown"
          v-for="(data, index) in response"
          :key="index"
        >
          <div
            class="card-header d-flex justify-content-between align-items-center"
          >
            {{ data.title }}
            <div class="d-flex align-items-center">
              <button class="btn" @click="edit(data, index)"><i class="fa fa-edit text-info"></i></button>
              <button class="btn" @click="deleteRequest(data, index)">
                <i class="fa fa-trash text-danger"></i>
              </button>
            </div>
          </div>
          <div class="card-body">
            {{ data.body }}
          </div>
        </div>
        <i v-if="loader" class="fa fa-spinner fa-spin fs-1"></i>
      </div>
    </div>
  </div>
</template>