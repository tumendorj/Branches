import Vue from "vue";
import VueRouter from "vue-router";
import Create from "../views/Create.vue";
import Read from "../views/Read.vue";
import Update from "../views/Update.vue";
import Delete from "../views/Delete.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Create",
    component: Create,
  },
  {
    path: "/read",
    name: "Read",
    component: Read,
  },
  {
    path: "/update",
    name: "Update",
    component: Update,
  },
  {
    path: "/delete",
    name: "Delete",
    component: Delete,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
