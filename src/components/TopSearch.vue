<template>
  <div class="top-container">
    <div class="input-g">
      <input
        type="text"
        name="pesquisar"
        id="pesquisar"
        placeholder="Pesquisar"
        v-model="input"
      />
      <img src="@/assets/icons/icon_search.png" alt="icon" />
    </div>

    <div class="filter-section">
      <label>Filtrar por</label>
      <div class="selects">
        <div
          class="f-nome"
          @click="selectNome"
          :class="{ select: selected === 'nome' }"
        >
          Nome
        </div>
        <div
          class="f-ano"
          :class="{ select: selected === 'ano' }"
          @click="selectAno"
        >
          Ano
        </div>
      </div>
    </div>
    <button class="btn btn--primary" @click="add">
      <img src="@/assets/icons/icon_plus.png" alt="icon" />
      Adicionar novo aluno
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "ano",
      input: "",
    };
  },
  watch: {
    input(newValue) {
      this.$emit("input", newValue);
    },
  },
  methods: {
    selectNome() {
      this.selected = "nome";
      this.$emit("year", this.selected);
    },
    selectAno() {
      this.selected = "ano";
      this.$emit("year", this.selected);
    },
    add() {
      this.$emit("add");
    },
  },
};
</script>

<style lang="scss" scoped>
.top-container {
  margin: 47px 60px;
  background: #ffffff;
  border: 1px solid #e1e1e1;
  box-shadow: 0px 4px 0px #e3e3e3;
  border-radius: 25px;
  display: flex;
  flex-wrap: wrap;
  height: 126px;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px 10px;

  .input-g {
    width: 27%;
    min-width: 220px;
    position: relative;

    img {
      position: absolute;
      right: 10px;
      top: 12px;
    }
  }

  input {
    width: 100%;
    height: 47px;
    background: #ffffff;
    border: 1px solid #c3c3c3;
    border-radius: 10px;
    padding: 0 40px 0 10px;
  }

  .filter-section {
    margin-top: -15px;
    label {
      font-weight: bold;
      color: var(--primary-color);
    }

    .selects {
      display: flex;
      font-weight: bold;
      position: relative;
      text-align: center;
      cursor: pointer;
      margin-top: 5px;

      .f-nome {
        width: 161px;
        background-color: white;
        color: var(--primary-color);
        border: 1px solid #c3c3c3;
        border-radius: 18px;
        padding: 8px 0;
        transition: 0.3s;

        &.select {
          background-color: var(--primary-color);
          color: white;
          border: none;
        }
      }
      .f-ano {
        width: 161px;
        background-color: white;
        color: var(--primary-color);
        padding: 8px 0;
        border-radius: 18px;
        margin-left: -28px;
        border: 1px solid #c3c3c3;
        border-left: none;
        transition: 0.3s;

        &.select {
          background-color: var(--primary-color);
          color: white;
          border: none;
        }
      }
    }
  }

  .btn {
    width: 20%;
    min-width: 230px;
    height: 40px;

    img {
      padding-top: 5px;
      width: 20px;
      margin-right: 8px;
    }
  }
}
</style>
