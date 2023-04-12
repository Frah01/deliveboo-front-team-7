import Chart from 'chart.js/auto'

(async function() {
  const data = [
    { month: "gennaio", count: 10 },
    { month: "febbraio", count: 20 },
    { month: "marzo", count: 15 },
    { month: "aprile", count: 25 },
    { month: "maggio", count: 22 },
    { month: "giugno", count: 30 },
    { month: "luglio", count: 28 },
  ];

  new Chart(
    document.getElementById('acquisitions'),
    {
      type: 'bar',
      data: {
        labels: data.map(row => row.year),
        datasets: [
          {
            label: 'Acquisitions by year',
            data: data.map(row => row.count)
          }
        ]
      }
    }
  );
})();
