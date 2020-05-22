<template>
  <div class="read">
    <h1>information about branches</h1>
    <button @click="getBranch()" class="button">getBranch</button>

    <table style="width:100%" v-if="branches && branches.length">
      <tr>
        <th>Id</th>
        <th>Code</th>
        <th>Name</th>
        <th>Description</th>
      </tr>
      <tr v-for="(item, index) in branches" :key="index">
        <td>{{ item.id }}</td>
        <td>{{item.code}}</td>
        <td>{{item.name}}</td>
        <td>{{item.description}}</td>
      </tr>
    </table>
    <!-- <h2 v-if="branches && branches.length">
      <h3 v-for="(item, index) in branches" :key="index">
        {{ item.id }}
        {{item.code}}
        {{item.name}}
        {{item.description}}
      </h3>
    </h2>-->
  </div>
</template>
<script>
import branchService from "../service/branchService";
//import branchService from "../service/"
export default {
  data() {
    return {
      branches: []
    };
  },
  methods: {
    getBranch() {
      branchService.getBranch().then(
        res => {
          // const { data } = res;
          // console.log(JSON.stringify(data));
          this.branches = res.data;
        },
        error => {
          console.log(error);
        }
      );
    }
  }
};
</script>
<style>
.button {
  width: 120px;
  height: 50px;
  font-size: 20px;
  background-color: white;
  color: black;
  border: 2px solid #4caf50; /* Green */
  transition-duration: 0.4s;
  border-radius: 10px;
}
.button:hover {
  background-color: #4caf50; /* Green */
  color: white;
}
table {
  border: 1px solid black;
}
</style>