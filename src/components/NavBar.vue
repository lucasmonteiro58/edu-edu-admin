<template>
  <section class="navbar">
    <nav>
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
export default {};
</script>

<style lang="scss" scoped>
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
</style>
