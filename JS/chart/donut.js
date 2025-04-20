const ctx = document.getElementById('myChart');

  const data = {
    labels: [
      '0 - 10 ans',
      '11 - 20 ans',
      '30 - 50 ans',
      '60 - 90 ans',
    ],
    datasets: [{
      label: 'valeur en pourcentage',
      data: [10,40,20,30],
      backgroundColor: [
        'red',
        'blue',
        'green',
        'purple'
      ],
      hoverOffset: 4
    }]
  };

  
  new Chart(ctx, {
    type: 'doughnut',
    data: data,
  });