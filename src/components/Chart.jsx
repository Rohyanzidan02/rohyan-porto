import '../styles/Chart.css'
import { Chart as ChartJs } from 'chart.js/auto'
import { Bar, Doughnut, Line } from 'react-chartjs-2'
// animasi
import {Fade} from 'react-awesome-reveal'

function Chart() {
  return (
    <div className="chard">
         {/* <h3 class="skill-title">SKILL NON TECNICAL</h3> */}
         
        <div className="dataChard">
        <Fade direction='up' delay={300} triggerOnce={true} cascade={false}>
            <div className="revenueCard">
            <Doughnut
    data={{
        labels: ["communication","Creative&innovative", "problem solving", "curious", "adapting", "Discipline"],
        datasets: [
            {
                label: "cons",
                data: [90, 80, 70, 80, 70, 90],
                backgroundColor: [
                    "rgba(255, 99, 132, 0.8)",  // Merah
                    "rgba(34, 111, 189, 0.8)",   // Biru
                    "rgba(75, 192, 192, 0.8)",
                    "rgba(126, 248, 115, 0.8)",
                    "rgba(248, 250, 140, 0.8)",  
                    "rgba(214, 144, 255, 0.8)", 

                ],
                borderColor: [
                    "rgba(255, 99, 132, 1)",    // Merah
                    "rgba(34, 111, 189, 0.8)",     // Biru
                    "rgba(75, 192, 192, 1)" ,
                    "rgba(126, 248, 115, 0.8)",
                    "rgba(248, 250, 140, 0.8)",
                    "rgba(214, 144, 255, 0.8)",      // Hijau
                ],
                borderWidth: 2, // Width of the border around each segment
            }
        ]
    }}
    options={{
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    boxWidth: 20, // Width of the legend box
                    padding: 15,  // Padding between legend items
                }
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return `${tooltipItem.label}: ${tooltipItem.raw}`; // Custom tooltip label
                    }
                }
            }
        },
        animation: {
            animateScale: true, // Scale animation on load
            animateRotate: true, // Rotate animation on load
        }
    }}
/>

            </div>
            
            <div className="customerCard">
                <Bar
                    data={{
                        labels: ["Skills", "problem solving", "innovation", " working in a team", "curious" ],
                        datasets: [
                            {
                                label: "Desain Grafis",
                                data: [800, 850, 900, 700, 900],
                                backgroundColor: "rgba(255, 99, 132, 0.8)",
                                borderRadius: 5,
                            },
                            {
                                label: "Web Devloper",
                                data: [500, 400, 700, 600, 1000],
                                backgroundColor: "rgba(75, 192, 192, 1)" ,
                                borderRadius: 5,
                            },
                            {
                                label: "Softhware/Hardware Engginer",
                                data: [600, 700, 500, 900, 800],
                                backgroundColor: "rgba(126, 248, 115, 0.8)",
                                borderRadius: 5,
                            },
                            {
                                label: "Staff Administratif",
                                data: [800, 900, 800, 909, 700],
                                backgroundColor: "rgba(248, 250, 140, 0.8)",
                            },
                            
                        ]
                    }}
                    options={{
                        responsive: true,
                        maintainAspectRatio: false
                    }}
                />
            </div>
            
            {/* <div className="categoryCard">
                <Line
                data={{
                    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October"],
                    datasets: [
                        {
                            label: "Revenue",
                            data: [200, 300, 250, 400, 350, 450, 300, 500, 400, 1000], // Fluctuating revenue data
                            borderColor: "rgba(29, 47, 182, 0.8)",
                            fill: true, // Fill under the line
                            tension: 0.1, // Smoothness of the line
                        },
                        {
                            label: "Loss",
                            data: [90, 80, 100, 70, 200, 150, 90, 120, 80, 60], // Fluctuating loss data
                            borderColor: "rgba(245, 62, 6, 0.8)",
                            fill: true, // Fill under the line
                            tension: 0.1, // Smoothness of the line
                        }
                    ]
                }}
                options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        tooltip: {
                            callbacks: {
                                label: function(tooltipItem) {
                                    return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`; // Custom tooltip label
                                }
                            }
                        }
                    },
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: 'Months', // X-axis title
                            }
                        },
                        y: {
                            title: {
                                display: true,
                                text: 'Amount', // Y-axis title
                            }
                        }
                    }
                }}
            />
            </div> */}
            </Fade>
        </div>
        
    </div>
  )
}

export default Chart