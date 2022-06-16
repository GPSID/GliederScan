import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Home from '../Home/Home'
import LineChart from './LineChart/LineChart'
import { list } from '../Dashboard/Dashboard'
import BarChart from './BarChart/BarChart'
import PieChart from '../Charts/PieChart/PieChart'
import './Chart.css'
function Chart() {
    return (
        <div>
            {list()}
            <div className='chartjs-line-pie-bar-charts'>
                <LineChart />
                <div className='chartjs-pie-bar-charts'>
                    <PieChart />
                    <BarChart />
                </div>
            </div>

        </div>
    )
}

export default Chart
