import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
const BarChart = ({ query }) => {
const [chartData, setChartData] = useState({
labels: ["sugar", "fiber","saturated fat","total fat","protein"],
datasets: [
{
label: "per serving in g",
data: [0,0,0,0,0],
backgroundColor: ["#ffbb11","#ec02f1","#50AF95","#03ba6f","#2a71d0"],
},
],
});
useEffect(() => {
const fetchData = async () => {
const url =
"https://calorieninjas.p.rapidapi.com/v1/nutrition?query=" + query;
console.log(url);
const options = {
method: "GET",
headers: {
"X-RapidAPI-Key":
"8679798c69msh8880aecbdfdc98fp1efa82jsn893f7db6f2b9",
"X-RapidAPI-Host": "calorieninjas.p.rapidapi.com",
},
};
const response = await fetch(url, options);
const incomingData = await response.json();
console.log(incomingData);
let filteredData = [
incomingData.items[0].sugar_g,
incomingData.items[0].fiber_g,
incomingData.items[0].fat_saturated_g,
incomingData.items[0].fat_total_g,
incomingData.items[0].protein_g,
];
let filteredLabels = [
"sugar",
"fiber",
"saturated fat",
"total fat",
"protein",
];
setChartData({
labels: filteredLabels,
datasets: [
{
label: "per serving of " + incomingData.items[0].name + " in g",
data: filteredData,
backgroundColor: [
"#ffbb11",
"#ec02f1",
"#50AF95",
"#03ba6f",
"#2a71d0",
],
},
],
});
console.log(chartData);
};
fetchData();
}, [query]);
return (
<Bar
data={chartData}
options={{
plugins: {
title: {
display: true,
text: "Nutritional Data ",
},
legend: {
display: true,
position: "bottom",
},
},
}}
/>
);
};
export default BarChart;