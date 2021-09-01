<template>
  <section class="students-profile">
    <div class="left-content">
      <NavBar class="navbar"></NavBar>
    </div>
    <div class="right-content">
      <span v-if="isVisibleList">
        <TopSearch
          class="top-search"
          @input="changeInput"
          @add="openStudentsRegister"
        ></TopSearch>
        <div
          v-for="student in filteredStudents"
          :key="student.id"
          class="section-years"
          v-show="student.students.length > 0"
        >
          <div class="title">{{ student.label }}</div>
          <div class="cards-section">
            <CardsStudents
              v-for="s in student.students"
              :key="s.name"
              :image="s.img"
              :name="s.name"
              :year="s.label"
            ></CardsStudents>
          </div>
        </div>
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
import CardsStudents from "../components/CardsStudents.vue";
import StudentsRegister from "../components/StudentsRegister.vue";

export default {
  name: "StudentsProfile",
  components: { NavBar, TopSearch, CardsStudents, StudentsRegister },
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
        return null;
      } else return this.students;
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

    .section-years {
      padding: 30px 50px;

      .title {
        font-size: 1.375rem;
        font-weight: bold;
        color: #616161;
        border-bottom: 1px solid #d8d8d8;
        padding: 7px 0;
      }

      .cards-section {
        margin-top: 25px;

        display: flex;
        flex-wrap: wrap;
        row-gap: 40px;
        column-gap: 40px;
      }
    }
  }
}
</style>
