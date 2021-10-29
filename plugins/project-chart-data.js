export const projectChartData = {
    type: "bar",
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July", "Neptune"],
      datasets: [
    
        {
          label: "Project growth [2021]",
          type: "bar",
          data: [3.166, 24.081, 30.003, 6.323, 354.792, 285.886, 43.662, 51.514],
          backgroundColor: "rgba(71, 183,132,.5)",
          borderColor: "#47b784",
          borderWidth: 1
        }
      ]
    },
    options: {
        responsive: true,
        legend: {
            position: "bottom",
            labels: {
                fontColor: "#777",
                padding: 10,
                boxWidth: 10,
                usePointStyle: true,
                fontStyle: "bold",
            }

        },
        scales: {
            xAxes: [{
                gridLines: {
                    display:false,
                }
            }],
            yAxes: [{
                gridLines: {
                    display:false,
                }   
            }]
        }
     }
    
  };
  
  export default projectChartData;