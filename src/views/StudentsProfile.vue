<template>
  <section class="students-profile">
    <div class="left-content">
      <NavBar class="navbar"></NavBar>
    </div>
    <div class="right-content">
      <span v-if="isVisibleList">
        <TopSearch
          ref="topSearch"
          class="top-search"
          @input="changeInput"
          @add="openStudentsRegister"
        ></TopSearch>
        <SectionYears :students="studentsPre"></SectionYears>
        <SectionYears :students="students1ano"></SectionYears>
        <SectionYears :students="students2ano"></SectionYears>
        <SectionYears :students="students3ano"></SectionYears>
      </span>
      <StudentsRegister
        v-else
        @close="closeStudentsRegister"
      ></StudentsRegister>
    </div>
  </section>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import TopSearch from "../components/TopSearch.vue";
import SectionYears from "../components/SectionYears.vue";
import StudentsRegister from "../components/StudentsRegister.vue";
import { filter } from "lodash";

export default {
  name: "StudentsProfile",
  components: { NavBar, TopSearch, StudentsRegister, SectionYears },
  data() {
    return {
      inputSearch: "",
      isVisibleList: true,
    };
  },
  computed: {
    students() {
      return this.$store.state.students;
    },
    filteredStudents() {
      if (this.inputSearch.length >= 3) {
        return filter(this.students, this.isMatchGroup.bind(this));
      } else return this.students;
    },
    studentsPre() {
      return filter(this.filteredStudents, { label: "Pré" });
    },
    students1ano() {
      return filter(this.filteredStudents, { label: "1º ano" });
    },
    students2ano() {
      return filter(this.filteredStudents, { label: "2º ano" });
    },
    students3ano() {
      return filter(this.filteredStudents, { label: "3º ano" });
    },
  },
  methods: {
    changeInput(value) {
      this.inputSearch = value;
    },
    closeStudentsRegister() {
      this.isVisibleList = true;
    },
    openStudentsRegister() {
      this.isVisibleList = false;
    },
    isMatchGroup(student) {
      if (this.$refs.topSearch.selected === "ano") {
        return (
          student.label &&
          student.label.toUpperCase().includes(this.inputSearch.toUpperCase())
        );
      } else {
        return (
          student.name &&
          student.name.toUpperCase().includes(this.inputSearch.toUpperCase())
        );
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.students-profile {
  display: flex;

  .left-content {
    width: 20%;
    min-width: 350px;
    .navbar {
      position: fixed;
      width: 20%;
      min-width: 350px;
    }
  }

  .right-content {
    width: 80%;
    background-color: #f7f7f7;
    padding-bottom: 60px;
    min-height: 100vh;
  }
}
</style>
