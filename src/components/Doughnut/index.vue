<script lang="ts" setup>
import { DoughnutChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";
import { ref } from "vue";

Chart.register(...registerables);

const totalUsuarios = 100;
const usuariosNovos = 10; // Menos de 30 dias
const usuariosAntigos = totalUsuarios - usuariosNovos;

const chartData = ref({
  labels: ["Novos", "Registrados"],
  datasets: [
    {
      data: [usuariosNovos, usuariosAntigos],
      backgroundColor: ["#36A2EB", "#d4d4d4"],
    },
  ],
});
const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: "bottom", 
      labels: {
        color: "#333",
        font: { size: 14 },
        padding: 20,
        boxWidth: 20,
      },
    },
    tooltip: {
      callbacks: {
        label: function (tooltipItem: any) {
          let value = tooltipItem.raw;
          return `${tooltipItem.label}: ${value} usuários`;
        },
      },
    },
  },
});
</script>

<template>
    <div class="chart-container">
        <DoughnutChart
            :chart-data="chartData"
            :chart-options="chartOptions"
        />
    </div>
</template>

<style scoped>
.chart-container {
  width: 250px;
  height: 300px;
  margin: auto;
}
</style>