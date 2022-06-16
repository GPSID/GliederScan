import React, { useState } from 'react'
import { Doughnut } from "react-chartjs-2";
import { USerData } from "./PieChartData";
import 'chart.js/auto'


import "./PieChart.css"



function PieChart() {
    const optionsList = ['All Zones', 'Specific Zones']

    const [userData, setUserData] = useState({
        
        labels: USerData.map((data) => data.mask),
        
        datasets: [{
            label: 'Users gained',
            data: USerData.map((data) => data.userGain),
            backgroundColor: ['#1eb980', '#ff6859'],
            borderColor: 'cyan',
            borderWidth: '1',
            cutout: '65%'
        }]
    })

    const [optionsId, setOptionsId] = useState(optionsList[0])

    const onChangeOptionsId = (e) => {
        setOptionsId(e.target.value)
    }

    const options = {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    usePointStyle: true,
                    boxWidth: 5,
                    pointStyle: 'Circle'
                },
                align: 'center',
                display: true,
                position: 'right'
            },
            maintainAspectRatio: false
        },
    }

    return (
        <div className='bg-chart'>
            <div className='pie-chart-name-alignment'>
                <h1 className='chart-heading'>Mask Detection</h1>
                <select value={optionsId} onChange={onChangeOptionsId} className='select-chart-heading' >
                    {optionsList.map(eachOption => (
                        <option key={eachOption}>{eachOption}</option>
                    ))}
                </select>
            </div>
            <div className='pie-bar-chat-size'>
                <Doughnut data={userData} options={options} />
            </div>
        </div>
    )
}

export default PieChart
