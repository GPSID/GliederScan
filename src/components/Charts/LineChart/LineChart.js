import React from "react";
import { Line } from "react-chartjs-2";
import 'chart.js/auto';
import { USerData } from "./Data";
import { useState } from "react";
import 'chartjs-adapter-date-fns';

import './lineChart.css'
// import faker from 'faker'


const LineChart = () => {
    const [userData, setUserData] = useState({
        datasets: [{
            label: 'NUMBER OF CUSTOMERS',
            data: USerData.map((data) => data),
            display: true,
            text: 'NUMBER OF CUSTOMERS',
            backgroundColor: ['green', 'blue'],
            borderColor: '#1eb980',
            borderWidth: '2',
            backgroundColor: 'rgba(30, 185, 128, 0.1)',
            fill: true,
            tension: 0.4
        }]
    })
    return (
        <div className="bg-line-chart" >
            <Line
                datasetIdKey='id'
                label= 'Customers'
                height={280}
                width={300}
                data={userData} options={{
                    plugins: {
                        tooltip: {
                            enabled: true
                        }
                    },
                    scales: {
                        y: {
                            title: {
                                display: true,
                                text: 'NUMBER OF CUSTOMERS',
                                padding: 12
                            }
                        },
                        x: {
                            type: 'time',
                            time: {
                                unit: 'hour'
                            },
                            title: {
                                display: true,
                                text: 'HOURLY',
                                padding: 12
                            }
                        }
                    },
                    interaction: {
                        mode: 'y'
                    },
                    maintainAspectRatio:false

                }}
                
                
                
            />
        </div>
    )
}
export default LineChart