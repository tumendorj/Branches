<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <section id="login">
      <h2>Delete</h2>
      <div>
        <Select2 v-model="myValue" :options="myOptions" />
      </div>
      <!-- <input type="text" placeholder="Id" v-model="id" /> -->
      <button v-on:click="deleteBranch">Delete</button>
    </section>
  </div>
</template>
<script>
import branchService from "../service/branchService";
export default {
  name: "Delete",
  data() {
    return {
      myValue: "",
      myOptions: [],
      branches: new Map(),
      branchId: ""
    };
  },
  methods: {
    deleteBranch() {
      this.getBykey();
      console.log("branchId " + this.branchId);
      branchService.deleteBranch(this.branchId).then(res => {
        console.log(res.data);
      });
    },
    getBykey() {
      for (let [key, value] of this.branches.entries()) {
        if (value === this.myValue) {
          this.branchId = key;
        }
      }
    }
  },
  mounted() {
    branchService.getBranch().then(res => {
      Object(res.data).map(element => {
        this.branches.set(element.id, element.name);
        this.myOptions.push(element.name);
      });
    });
  }
};
</script>
<style  scoped>
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
  /* animation-fill-mode: both; */
}

@media screen and (max-width: 780px) {
  section {
    width: 90%;
  }
}
</style>