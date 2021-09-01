<template>
  <div class="card-student">
    <img :src="image" alt="image" />
    <div class="title">{{ name }}</div>
    <div class="year">{{ year }}</div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    year: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.card-student {
  width: 276px;
  height: 321px;
  background: #ffffff;
  border: 1px solid #e1e1e1;
  box-shadow: 0px 4px 0px #e3e3e3;
  border-radius: 10px;
  padding: 18px;
  color: #616161;
  transition: 0.3s;

  img {
    border-radius: 10px;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.01);
  }

  .title {
    font-size: 1.375rem;
    font-weight: 800;
    margin-top: 15px;
    margin-bottom: 10px;
  }

  .year {
    font-size: 1.2rem;
  }
}
</style>
