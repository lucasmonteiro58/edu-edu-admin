<template>
  <section class="navbar">
    <img
      src="@/assets/icons/icon_menu.png"
      alt="menu"
      class="menu-icon"
      @click="toogleMenu"
    />
    <nav class="nav">
      <img src="@/assets/logo.png" alt="logo" class="logo" />
      <ul>
        <li class="active">
          <img src="@/assets/icons/icon_face.png" alt="icon" />
          <span>Perfil dos Alunos</span>
        </li>
        <li>
          <img src="@/assets/icons/icon_doc.png" alt="icon" />
          <span>Prova de Português</span>
        </li>
        <li>
          <img src="@/assets/icons/icon_test.png" alt="icon" />
          <span>Atividades Digitais</span>
        </li>
        <li>
          <img src="@/assets/icons/icon_help.png" alt="icon" />
          <span>Ajuda</span>
        </li>
        <li>
          <img src="@/assets/icons/icon_settings.png" alt="icon" />
          <span>Configurações</span>
        </li>
      </ul>
    </nav>
    <nav class="nav-small" v-if="isOpen">
      <img src="@/assets/logo.png" alt="logo" class="logo" />
      <ul>
        <li class="active">
          <img src="@/assets/icons/icon_face.png" alt="icon" />
          <span>Perfil dos Alunos</span>
        </li>
        <li>
          <img src="@/assets/icons/icon_doc.png" alt="icon" />
          <span>Prova de Português</span>
        </li>
        <li>
          <img src="@/assets/icons/icon_test.png" alt="icon" />
          <span>Atividades Digitais</span>
        </li>
        <li>
          <img src="@/assets/icons/icon_help.png" alt="icon" />
          <span>Ajuda</span>
        </li>
        <li>
          <img src="@/assets/icons/icon_settings.png" alt="icon" />
          <span>Configurações</span>
        </li>
      </ul>
    </nav>
  </section>
</template>

<script>
export default {
  computed: {
    isOpen() {
      return this.$store.state.menu;
    },
  },
  methods: {
    toogleMenu() {
      if (this.isOpen) this.$store.commit("closeMenu");
      else this.$store.commit("openMenu");
    },
  },
};
</script>

<style lang="scss" scoped>
.menu-icon {
  position: fixed;
  top: 20px;
  left: 20px;
  width: 40px;
  z-index: 10000;
  background-color: white;
  border: 5px solid white;
  border-radius: 10px;
  display: none;
}
.nav-small {
  position: fixed;
  background-color: white;
  z-index: 9999;
}
nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;

  .logo {
    width: 45%;
    margin: 30px 0;
    max-width: 220px;
  }

  ul {
    width: 100%;
    li {
      display: flex;
      align-items: center;
      margin: 30px 0px;
      padding: 18px 40px;
      background-color: white;
      color: #cacaca;
      cursor: pointer;
      transition: 0.3s;

      &:hover {
        color: var(--primary-color);
      }

      &.active {
        background-color: var(--primary-color);
        color: white;
      }

      img {
        height: 25px;
      }

      span {
        margin-left: 20px;
        font-weight: bold;
        font-size: 1.2rem;
      }
    }
  }
}

@media (max-width: 600px) {
  .nav {
    display: none;
  }

  .menu-icon {
    display: block;
  }
}
</style>
