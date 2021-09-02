import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menu: false,
    logged: false,
    students: [
      {
        name: "Ana Luiza",
        label: "1º ano",
        img: require("@/assets/kids/juju.png"),
      },
      {
        name: "Lucas Dias",
        label: "1º ano",
        img: require("@/assets/kids/sr-goiaba.png"),
      },
      {
        name: "Maria Lourdes",
        label: "1º ano",
        img: require("@/assets/kids/carmen.png"),
      },

      {
        name: "Eduardo Rocha",
        label: "2º ano",
        img: require("@/assets/kids/zig.png"),
      },
      {
        name: "Marisa Moura",
        label: "2º ano",
        img: require("@/assets/kids/avatar12.png"),
      },
    ],
  },
  mutations: {
    login(state) {
      state.logged = true;
    },
    logout(state) {
      state.logged = false;
    },
    addStudent(state, newStudent) {
      state.students.push(newStudent);
    },
    openMenu(state) {
      state.menu = true;
    },
    closeMenu(state) {
      state.menu = false;
    },
  },
  actions: {},
  modules: {},
});
