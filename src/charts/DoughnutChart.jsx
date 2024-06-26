import React from "react";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = () => {
  // Sample data for the doughnut chart
  const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100, 60, 200],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#00FF00",
          "#800080",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#00FF00",
          "#800080",
        ],
      },
    ],
  };

  return (
    <div>
      <h2>Doughnut Chart </h2>
      <Doughnut data={data} />
    </div>
  );
};

export default DoughnutChart;
