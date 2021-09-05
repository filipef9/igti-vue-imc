<template>
  <h1 class="label-title">Cálculo do IMC</h1>
  <h2 class="label-subtitle">Digite seu peso e altura para calcular o IMC</h2>

  <div class="div-imc">
    <span class="p-float-label">
      <InputText id="input-weight" type="text" v-model="weight" :disabled="imc" />
      <label for="input-weight">Peso</label>
    </span>
  </div>

  <div class="div-imc">
    <span class="p-float-label">
      <InputText id="input-height" type="text" v-model="height" :disabled="imc" />
      <label for="input-height">Altura</label>
    </span>
  </div>

  <div class="buttons-group">
    <Button label="Calcular" @click="calculateImc" :disabled="!weight || !height" />
    <Button label="Limpar" @click="clear" />
  </div>

  <div v-show="imc">
    <p class="label-result">Seu IMC é: <strong>{{ imc }}</strong></p>
    <p class="label-result">A classificação do seu IMC é: <strong>{{ classification }}</strong></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      height: null,
      weight: null,
      imc: null,
      classification: ''
    };
  },
  methods: {
    calculateImc() {
      if (!this.weight || !this.height) {
        return;
      }

      this.imc = (this.weight / (this.height ** 2)).toFixed(2);

      if (this.imc < 18.5) {
        this.classification = 'Magreza';
      } else if (this.imc >= 18.5 && this.imc < 25) {
        this.classification = 'Normal';
      } else if (this.imc >= 25 && this.imc < 30) {
        this.classification = 'Sobrepeso';
      } else if (this.imc >= 30 && this.imc < 40) {
        this.classification = 'Obesidade';
      } else {
        this.classification = 'Obesidade grave';
      }
    },

    clear() {
      this.height = null;
      this.weight = null;
      this.imc = null;
      this.classification = '';
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.div-imc, .buttons-group {
  margin-top: 2rem;
}

.buttons-group > button {
  margin-right: 10px;
}

.label-title, label-result {
  font-size: 2rem;
}

.label-subtitle {
  font-size: 1.1rem;
}
</style>
