import React, { useState } from 'react'
import { Bar } from "react-chartjs-2";
import { USerData } from "./Data";
import 'chart.js/auto'
import './BarChart.css'



function BarChart() {
    const optionsList = ['All Zones', 'Specific Zones']

    const [userData, setUserData] = useState({
        labels: USerData.map((data) => data.users),
        datasets: [{
            label: 'Total Users in store',
            data: [USerData[0].userGain],
            backgroundColor: USerData[0].backgroundColor,
            borderColor: 'cyan',
            borderWidth: '1'
        }, {
            label: 'Not Maintain Social Distancing',
            data: [USerData[1].userGain],
            backgroundColor: [USerData[1].backgroundColor],
            borderColor: '#000000',
            borderWidth: '1'
        }]
    })
    const options = {
        scales: {
            x: {
                display: false
            },
            y: {
                display: false

            }

        },

        responsive: true,
        plugins: {
            legend: {
                labels: {
                    usePointStyle: true,
                    boxWidth: 5,
                    pointStyle: 'Circle'
                },
                display: true,
                position: 'right'
            },
            maintainAspectRatio: false
        },

    };
    const [optionsId, setOptionsId] = useState(optionsList[0])

    const onChangeOptionsId = (e) => {
        setOptionsId(e.target.value)
    }
    console.log(optionsId)

    return (
        <div className='bg-chart'>
            <div className='pie-chart-name-alignment'>
                <h1 className='chart-heading'>Social Distancing</h1>
                <select value={optionsId} onChange={onChangeOptionsId} className='select-chart-heading ' >
                    {optionsList.map(eachOption => (
                        <option key={eachOption}>{eachOption}</option>
                    ))}
                </select>
            </div>
            <p className='chart-description'>Current Status</p>

            <div className='pie-bar-chat-size'>
                <Bar data={userData} options={options} />
            </div>
        </div>
    )
}

export default BarChart
