<template>
  <div class="students-register">
    <div class="container-box" v-show="!isOpenMenu">
      <div class="change-img">
        <img :src="listAvatar[indexAvatar]" alt="avatar" />
        <button class="btn btn--seconday" @click="changeAvatar">
          Mudar Avatar
        </button>
      </div>
      <div class="form-group">
        <label for="nome">Nome Completo</label>
        <input type="text" id="nome" v-model="name" />
        <img src="@/assets/icons/icon_user.png" alt="icon" />
      </div>
      <div class="form-group">
        <label for="escola">Escola</label>
        <input type="text" id="escola" v-model="school" />
        <img src="@/assets/icons/icon_hat.png" alt="icon" />
      </div>
      <div class="slider-year">
        <div class="image">
          <VueLottiePlayer
            name="workoutMonkeyAnim"
            loop
            :animationData="require('@/assets/lottie.json')"
            width="100px"
            height="100px"
            class="animation"
          />
        </div>
        <div class="slider">
          <span class="label">Ano Escolar</span>
          <VueSlider
            class="v-slider"
            :data="sliderData"
            v-model="value"
            marks
            tooltip="none"
            width="100%"
            height="10px"
            :dotStyle="{ backgroundColor: '#47CDFF' }"
            :processStyle="{ backgroundColor: '#47CDFF' }"
            :tooltipStyle="{ backgroundColor: '#47CDFF' }"
            :labelStyle="{ color: '#47CDFF', fontWeight: 'bold' }"
          ></VueSlider>
          <div class="info m1">
            <b>Pré I: </b>Aluno completou 4 anos antes do dia 31 de março de
            2020.
          </div>
          <div class="info">
            <b>Pré II: </b> Aluno completou 5 anos antes do dia 31 de março de
            2020.
          </div>
        </div>
      </div>
      <div class="checkbox">
        <input type="checkbox" name="check" id="check" v-model="checkbox" />
        <div class="text">
          Eu autorizo o EduEdu a coletar e processar os dados do meu filho(a)
          conforme a política de privacidade.
        </div>
      </div>
      <button
        class="btn btn--primary"
        :disabled="!disabledButton"
        @click="addStudent"
      >
        Adicionar Aluno
      </button>
    </div>
  </div>
</template>

<script>
import VueSlider from "vue-slider-component";
import VueLottiePlayer from "vue-lottie-player";
import "vue-slider-component/theme/default.css";

const listAvatar = [
  require("@/assets/kids/juju.png"),
  require("@/assets/kids/sr-goiaba.png"),
  require("@/assets/kids/carmen.png"),
  require("@/assets/kids/zig.png"),
  require("@/assets/kids/avatar12.png"),
];
export default {
  components: {
    VueSlider,
    VueLottiePlayer,
  },
  data() {
    return {
      value: "Pré",
      name: "",
      school: "",
      sliderData: ["Pré", "1", "2", "3"],
      checkbox: false,
      listAvatar,
      indexAvatar: Math.floor(Math.random() * 3),
    };
  },
  computed: {
    disabledButton() {
      return this.name && this.school && this.value && this.checkbox;
    },
    isOpenMenu() {
      return this.$store.state.menu;
    },
  },
  methods: {
    changeAvatar() {
      if (this.indexAvatar < 4) {
        this.indexAvatar++;
      } else {
        this.indexAvatar = 0;
      }
    },
    addStudent() {
      const student = {
        name: this.name,
        label: this.value === "Pré" ? this.value : `${this.value}º ano`,
        img: this.listAvatar[this.indexAvatar],
        school: this.school,
      };
      this.$store.commit("addStudent", student);
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped>
.students-register {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .container-box {
    width: 50%;
    background: white;
    margin-top: 50px;
    box-shadow: 0px 4px 0px #e3e3e3;
    border-radius: 25px;
    border: 1px solid #e1e1e1;
    min-height: 80%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 30px;

    .checkbox {
      display: flex;
      font-size: 0.875rem;
      color: #c4c4c4;
      margin-bottom: 20px;

      input {
        margin: 10px;
        filter: hue-rotate(10deg);
      }
    }

    .slider-year {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;

      .label {
        font-weight: bold;
        color: var(--primary-color);
      }

      .v-slider {
        margin-right: 40px;
      }

      .info {
        font-size: 0.875rem;
        color: #c4c4c4;
        padding-right: 50px;

        &.m1 {
          margin-top: 30px;
        }
      }
    }

    .change-img {
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-bottom: 30px;

      img {
        width: 156px;
      }

      .btn {
        width: 218px;
        height: 47px;
        margin-top: -5px;
      }
    }

    .form-group {
      width: 100%;
      margin-bottom: 20px;
      img {
        left: 20px;
      }

      input {
        padding: 0 20px 0 45px;
        width: 100%;
      }
    }
  }
}

@media (max-width: 600px) {
  .students-register {
    .container-box {
      width: 90%;
      margin-top: 80px;
      .change-img img {
        width: 100px;
      }
      .change-img .btn {
        width: 150px;
        height: 35px;
      }
      .form-group img {
        display: none;
      }

      .form-group input {
        padding: 0 5px;
      }

      .slider-year {
        .image {
          display: none;
        }

        .info {
          padding-right: 0;
        }
      }
    }
  }
}
</style>
