var ctx = document.getElementById('agriChart').getContext('2d');

    // Create the chart
    var agriChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [],  // Time labels
            datasets: [
                {
                    label: 'Temperature (°C)',
                    data: [],  // Temperature data
                    borderColor: 'rgba(255, 99, 132, 1)',
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    fill: false
                },
                {
                    label: 'Humidity (%)',
                    data: [],  // Humidity data
                    borderColor: 'rgba(54, 162, 235, 1)',
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    fill: false
                },
                {
                    label: 'Soil Moisture (%)',
                    data: [],  // Soil moisture data
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    fill: false
                }
            ]
        },
        options: {
            scales: {
                x: {
                    type: 'time',
                    time: {
                        unit: 'second'
                    },
                    title: {
                        display: true,
                        text: 'Time'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Values'
                    }
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            }
        }
    });

    // Function to generate random values for temperature, humidity, and soil moisture
    function getRandomValue(min, max) {
        return Math.random() * (max - min) + min;
    }

    // Function to update the chart with random data
    function updateChart() {
        var now = new Date();  // Current timestamp
        var temperature = getRandomValue(20, 35);  // Random temperature between 20°C and 35°C
        var humidity = getRandomValue(40, 80);  // Random humidity between 40% and 80%
        var soilMoisture = getRandomValue(10, 50);  // Random soil moisture between 10% and 50%

        agriChart.data.labels.push(now);  // Add current timestamp to labels
        agriChart.data.datasets[0].data.push(temperature);  // Add random temperature
        agriChart.data.datasets[1].data.push(humidity);  // Add random humidity
        agriChart.data.datasets[2].data.push(soilMoisture);  // Add random soil moisture

        // Keep only the last 10 data points (optional)
        if (agriChart.data.labels.length > 10) {
            agriChart.data.labels.shift();
            agriChart.data.datasets.forEach(dataset => dataset.data.shift());
        }

        agriChart.update();  // Update the chart to reflect the new data
    }

    // Update the chart every 2 seconds with random data
    setInterval(updateChart, 2000);