import React ,{useState}from 'react'
import Chart from 'react-apexcharts'
function ReportCharts() {
  const [data] = useState({
    series: [
        {
            name: 'Sales',
            data: [88, 23, 43, 54, 90, 23]
        },
        {
            name: 'Revenue',
            data: [99, 42, 23, 54, 65, 33]
        },
        {
            name: 'Customers',
            data: [90, 43, 54, 23, 65, 88]
        }
    ],
    options: {
        chart: {
            height: 350,
            type: 'area',
            toolbar:{
                show: false
            }
        },
        markers: {
            size: 4
        },
        colors: ['#4154f1', '#2eca6a', '#ff771d'],
        fill:{
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.3, 
                opacityTo: 0.4,
                stops: [0, 90, 100]
            }
        },
        dataLabels:{
            enabled: false
        },
        stroke:{
            curve: 'smooth',
            width: 2
        },
        xaxis:{
            type: 'datetime',
            categories:[
                '2024-12-07 10:48:40.187593',
                '2024-12-06 10:48:40.187593', 
                '2024-12-05 10:48:40.187593' ,
                '2024-12-04 10:48:40.187593' ,
                '2024-12-03 10:48:40.187593' ,
                '2024-12-02 10:48:40.187593',  
            ]
        },
        tooltip:{
            x: {
                format: 'dd/MM/yy HH:mm'
            }
        }
    }
  })
    return (
        <Chart
        options={data.options}
        series={data.series}
        type={data.options.chart.type}
        height={data.options.chart.height}/>
  )
}

export default ReportCharts