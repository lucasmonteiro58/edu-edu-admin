<template>
  <div class="section-years" v-if="students.length > 0">
    <div class="title">{{ students[0] && students[0].label }}</div>
    <div class="cards-section">
      <CardsStudents
        v-for="s in students"
        :key="s.name"
        :image="s.img"
        :name="s.name"
        :year="s.label"
      ></CardsStudents>
    </div>
  </div>
</template>

<script>
import CardsStudents from "../components/CardsStudents.vue";
export default {
  components: { CardsStudents },
  props: {
    students: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
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
</style>
