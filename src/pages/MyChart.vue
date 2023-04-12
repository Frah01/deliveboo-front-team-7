<script>
import Chart from 'chart.js/auto'
export default {
   mounted(){
    const ctx = document.getElementById('myChart');

const MyChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
MyChart;

   } 
}
</script>
<template lang="">
    <div>
        <canvas id="myChart"></canvas> 
    </div>
</template>

<style lang="">
    
</style>