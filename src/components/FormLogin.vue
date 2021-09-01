<template>
  <div class="login-section">
    <div class="top-images">
      <img src="@/assets/logo.png" alt="logo" class="logo" />
      <VueLottiePlayer
        name="workoutMonkeyAnim"
        loop
        :animationData="require('@/assets/lottie.json')"
        width="60px"
        height="60px"
        class="animation"
      />
    </div>

    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" id="email" />
      <img src="@/assets/icons/icon_email.png" alt="icon" />
    </div>
    <div class="form-group">
      <label for="senha">Senha</label>
      <input type="password" id="senha" />
      <img src="@/assets/icons/icon_eye.png" alt="icon" />
    </div>
    <button class="btn btn--primary" @click="login">Login</button>
    <button class="btn btn--seconday">Esqueci senha</button>
  </div>
</template>

<script>
import VueLottiePlayer from "vue-lottie-player";
export default {
  components: { VueLottiePlayer },
  methods: {
    login() {
      this.$emit("login");
    },
  },
};
</script>

<style lang="scss" scoped>
.login-section {
  min-width: 400px;
  min-height: 520px;
  border-radius: 25px;
  background: #ffffff;
  border: 1px solid #e1e1e1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;

  .top-images {
    position: relative;

    .animation {
      position: absolute;
      bottom: 108px;
      left: -10px;
    }
  }

  .logo {
    width: 179px;
    margin-bottom: 40px;
  }

  .form-group {
    margin-bottom: 20px;
  }

  button {
    margin-top: 20px;
  }
}
</style>
