<script>


export default {
  name: "TableData",
  data(){
    return {
         content: [
          "Id",
          "Name",
          "Email",
          "Mobile",
          "Action"
      ],
      users: [
        {
        id: 1,
        name: "Alim",
        email: "alim@gamil.com",
        phone: "03042045337"
      },
      {
        id: 2,
        name: "Alim",
        email: "alim@gamil.com",
        phone: "03042045337"
      },
      {
        id: 3,
        name: "Alim",
        email: "alim@gamil.com",
        phone: "03042045337"
      },
      {
        id: 4,
        name: "Alim",
        email: "alim@gamil.com",
        phone: "03042045337"
      },
      {
        id: 5,
        name: "Alim",
        email: "alim@gamil.com",
        phone: "03042045337"
      },
      ]
    }
  },
methods: {
     deleteRow(index) {
       this.users.splice(index,1)
     }
  }
}
</script>


<template>
    <div class="container pt-5">
      <table class="table">
      <thead>
        <tr>
          <th v-for="(data, index) in content" :key="index">{{ data }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, index) in users" :key="index">
          <td>{{ data.id }}</td>
          <td>{{ data.name }}</td>
          <td>{{ data.email }}</td>
          <td>{{ data.phone }}</td>
          <td><button type="button" class="btn btn-danger" @click="deleteRow(index)">Delete</button>
</td>

        </tr>
      </tbody>
    </table>
    </div>
</template>


