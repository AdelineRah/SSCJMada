  const ctx = document.getElementById('myChart');
      
const labels= ['1-10 ans', '11-20 ans']
const data = {
  labels: labels,
  datasets: [{
    label:'age',
    data: [10,20],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'blue',
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
    ],
    borderWidth: 1
  }]
};



  new Chart(ctx, {
    type: 'bar',
    labels:labels,
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });