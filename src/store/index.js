import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    logged: false,
    students: [
      {
        id: 0,
        label: "Pré",
        students: [],
      },
      {
        id: 1,
        label: "1º ano",
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
        ],
      },
      {
        id: 2,
        label: "2º ano",
        students: [
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
      {
        id: 3,
        label: "3º ano",
        students: [],
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
      switch (newStudent.label) {
        case "Pré":
          state.students[0].students.push(newStudent);
          break;
        case "1º ano":
          state.students[1].students.push(newStudent);
          break;
        case "2º ano":
          state.students[2].students.push(newStudent);
          break;
        case "3º ano":
          state.students[3].students.push(newStudent);
          break;
        default:
          break;
      }
    },
  },
  actions: {},
  modules: {},
});
