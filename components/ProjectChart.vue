<template>
<div>
    <canvas id="project-chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'

import projectChartData from "../plugins/project-chart-data";

export default {
  name: "ProjectChart",
  data() {
    return {
      projectChartData: projectChartData,
    };
  },
  mounted() {
    const ctx = document.getElementById("project-chart");
    new Chart(ctx, this.projectChartData);
  },
};
</script>