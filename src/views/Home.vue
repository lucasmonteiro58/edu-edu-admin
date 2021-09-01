<template>
  <section class="home-page">
    <FormLogin @login="loginClick"></FormLogin>
    <div class="warning">© 2020 EduEdu, todos os direitos reservados</div>
  </section>
</template>

<script>
import FormLogin from "../components/FormLogin.vue";

export default {
  components: { FormLogin },
  name: "Home",
  methods: {
    loginClick() {
      this.$store.commit("login");
      this.$router.push({ path: "students-profile" });
    },
  },
};
</script>
<style lang="scss" scoped>
.home-page {
  width: 100%;
  height: 100vh;
  background-image: url("~@/assets/login_bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .warning {
    color: white;
    font-weight: bold;
    font-size: 0.875rem;
    margin-top: 30px;
  }
}
</style>
