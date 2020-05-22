<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <section id="login">
      <h2>Create</h2>
      <input type="text" placeholder="Id" v-model="branch.id" />
      <input type="text" placeholder="Code" v-model="branch.code" />
      <input type="text" placeholder="Name" v-model="branch.name" />
      <input type="text" placeholder="Description" v-model="branch.description" />
      <input type="text" placeholder="ParentId" v-model="branch.parentId" />
      <button v-on:click="create">Create</button>
    </section>
  </div>
</template>

<script>
//import { branch } from "../model/branchModel";
import branch from "../model/branchModel";
import branchService from "../service/branchService";
export default {
  name: "Home",
  data() {
    return {
      branch: new branch("", "", "", "", "")
    };
  },
  methods: {
    create() {
      branchService.saveBranch(this.branch).then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<style scoped>
html,
body {
  width: 100%;
  height: 100%;
  margin: 0px;
  font-family: "Work Sans", sans-serif;
}

body {
  background-image: url("https://images-assets.nasa.gov/image/6900952/6900952~orig.jpg");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
}

section {
  background-color: rgba(0, 0, 0, 0.72);
  width: 25%;
  min-height: 25%;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
}
form {
  display: flex;
  flex-direction: column;
  padding: 15px;
}
h2 {
  font-family: "Archivo Black", sans-serif;
  color: #e0dada;
  margin-left: auto;
  margin-right: auto;
}

.info {
  width: 100%;
  text-align: center;
  min-height: 45px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.info p {
  margin: auto;
  padding: 5px;
}
.info.good {
  border: 1px solid #416d50;
  background-color: #47cf73;
  color: #416d50;
}

input {
  height: 35px;
  padding: 5px 5px;
  margin: 10px 0px;
  background-color: #e0dada;
  border: none;
}
button {
  height: 40px;
  padding: 5px 5px;
  margin: 10px 0px;
  font-weight: bold;
  background-color: #be5256;
  border: none;
  color: #e0dada;
  cursor: pointer;
  font-size: 16px;
}
button:hover {
  background-color: #711f1b;
}

.shake {
  animation-name: shake;
  animation-duration: 1s;
  /*animation-fill-mode: both;*/
}

@media screen and (max-width: 780px) {
  section {
    width: 90%;
  }
}
</style>
