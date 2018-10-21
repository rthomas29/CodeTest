export const calculateTotalCorrect = (htmlTotal, cssTotal, jsTotal) => (htmlTotal + cssTotal, jsTotal);

export const buildDonutData = (htmlTotal, cssTotal, jsTotal) => ({
  labels: ['HTML', 'CSS', 'JavaScript'],
  datasets: [
    {
      label: '# of correct answers',
      backgroundColor: ['rgba(50, 195, 255, 0.2)', '#FF6384', '#36A2EB'],
      data: [htmlTotal, cssTotal, jsTotal],
      hoverBackgroundColor: ['rgba(50, 195, 255, 0.2)', '#FF6384', '#36A2EB'],
      pointHoverBorderColor: 'rgba(50, 195, 255, 0.2)',
      pointBackgroundColor: 'rgba(23, 27, 236, 0.2)'
    }
  ]
});

export const donutOptions = {
  maintainAspectRatio: false,
  responsive: true,
  legend: {
    display: true,
    position: 'bottom'
  },
  plugins: {
    datalabels: {
      textAlign: 'center',
      color: '#fff'
    }
  }
};

export const buildBarData = (htmlTotal, cssTotal, jsTotal) => ({
  labels: ['HTML', 'CSS', 'JavaScript'],
  datasets: [
    {
      data: [htmlTotal, cssTotal, jsTotal],
      borderWidth: 1,
      backgroundColor: ['rgba(63,195,128, 0.2)', 'rgba(239,72,54,0.2)', 'rgba(65,131,215,0.2)']
    }
  ]
});

export const barOptions = {
  legend: {
    display: false
  },
  maintainAspectRatio: false,
  scales: {
    xAxes: [
      {
        ticks: {
          beginAtZero: true
        }
      }
    ]
  }
};
