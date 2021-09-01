import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import StudentsProfile from "../views/StudentsProfile.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/students-profile",
    name: "StudentsProfile",
    component: StudentsProfile,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
