<script>
export default {
  name: "HeroSection",
  data() {
    return {
      students: [
        {
          name: "malik",
          id: "1",
        },
        {
          name: "alim",
          id: "2",
        },
        {
          name: "test",
          id: "3",
        },
        {
          name: "abc",
          id: "4",
        },
      ],
    };
  },
};
</script>

<template>
  <!-- { -->
  <h1>List of Students</h1>

  <table>
    <tr className="customTable">
      <th>No.</th>
      <th>Name</th>
      <th>ID</th>
    </tr>

    <!-- { -->
    <!-- students.map((item, index) => {
            return ( -->
    <tr key="{index}" className="customTable">
      <td>{{ students[0].index }}</td>
      <td>{{ students[0].name }}</td>
      <td>{{ students[0].id }}</td>
    </tr>
     <tr key="{index}" className="customTable">
      <td>{{ students[1].index }}</td>
      <td>{{ students[1].name }}</td>
      <td>{{ students[1].id }}</td>
    </tr>
     <tr key="{index}" className="customTable">
      <td>{{ students[2].index }}</td>
      <td>{{ students[2].name }}</td>
      <td>{{ students[2].id }}</td>
    </tr>
     <tr key="{index}" className="customTable">
      <td>{{ students[3].index }}</td>
      <td>{{ students[3].name }}</td>
      <td>{{ students[3].id }}</td>
    </tr>
    <!-- )
          } -->
    <!-- } -->
  </table>

  <!-- } -->

</template>
<style>
.customTable > td,
th {
  border: 2px solid black;
  /* background-color: green; */
  padding: 10px;
  margin: 10px;
}
</style>
