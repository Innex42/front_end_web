import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
    let chartData = {
        labels: [
            "sugar",
            "fiber",
            "saturated fat",
            "total fat",
            "protein"
        ],
        datasets: [
            {
                label:"per serving in g",
                data: [2,9,1,4,8,5,11,3],
                backgroundColor: [
                    "#ffbb11",
                    "#ec02f1",
                    "#50AF95",
                    "#03ba6f",
                    "#2a71d0"
                ],
            },
        ],
    };
    return(
        <Bar
        data={chartData}
        options={{
            plugins: {
                title:{
                    display:true,
                    text:"Nutritional Data",
                },
                legend:{
                    display:true,
                    position: "bottom",
                },
            },
        }}
        />
    );
};
export default BarChart;