import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js'; // Import Chart.js components
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

// Register the elements you will use
Chart.register(ArcElement, Tooltip, Legend);

function AnalyticsReports() {
  const [analyticsData, setAnalyticsData] = useState({
    name: "bharath02",
    age: 21,
    weight: "55 kg",
    height: "175 cm",
    bmi: 24.5,
    caloriesBurned: 4500,
    caloriesIntake: 2300,
    workoutsCompleted: 20,
    goalProgress: "70%",
    heartRate: "72 bpm",
    hydrationLevel: "Good",
    sleepQuality: "7 hours average",
    mentalWellnessScore: 8.5,
    stepCount: 10000,
    workoutConsistency: "High",
  });

  const downloadReport = async () => {
    const reportContent = document.getElementById("report-content");
    const canvas = await html2canvas(reportContent);
    const imgData = canvas.toDataURL("image/png");
    
    const pdf = new jsPDF();
    pdf.setFontSize(18);
    pdf.text("PROFOOT Analytics Report", 15, 20);
    pdf.addImage(imgData, "PNG", 10, 30, 190, 160);
    pdf.save("PROFOOT_Analytics_Report.pdf");
  };

  // Pie chart data
  const pieChartData = {
    labels: ['Calories Burned', 'Calories Intake', 'Workouts Completed'],
    datasets: [
      {
        label: 'Fitness Metrics',
        data: [analyticsData.caloriesBurned, analyticsData.caloriesIntake, analyticsData.workoutsCompleted * 100], // Scale workouts for better visual impact
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-md max-w-3xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-6">Analytics & Report</h2>

      <div id="report-content" className="space-y-6">
        <div className="bg-gray-800 p-4 rounded">
          <h3 className="text-xl font-semibold">User Information</h3>
          <p><strong>Name:</strong> {analyticsData.name}</p>
          <p><strong>Age:</strong> {analyticsData.age}</p>
          <p><strong>Weight:</strong> {analyticsData.weight}</p>
          <p><strong>Height:</strong> {analyticsData.height}</p>
          <p><strong>BMI:</strong> {analyticsData.bmi}</p>
        </div>

        <div className="bg-gray-800 p-4 rounded">
          <h3 className="text-xl font-semibold">Fitness Metrics</h3>
          <p><strong>Calories Burned:</strong> {analyticsData.caloriesBurned}</p>
          <p><strong>Calories Intake:</strong> {analyticsData.caloriesIntake}</p>
          <p><strong>Workouts Completed:</strong> {analyticsData.workoutsCompleted}</p>
          <p><strong>Goal Progress:</strong> {analyticsData.goalProgress}</p>
        </div>

        <div className="bg-gray-800 p-4 rounded">
          <h3 className="text-xl font-semibold">Health Metrics</h3>
          <p><strong>Heart Rate:</strong> {analyticsData.heartRate}</p>
          <p><strong>Hydration Level:</strong> {analyticsData.hydrationLevel}</p>
          <p><strong>Sleep Quality:</strong> {analyticsData.sleepQuality}</p>
          <p><strong>Mental Wellness Score:</strong> {analyticsData.mentalWellnessScore}</p>
          <p><strong>Step Count:</strong> {analyticsData.stepCount}</p>
          <p><strong>Workout Consistency:</strong> {analyticsData.workoutConsistency}</p>
        </div>

        {/* Pie Chart for Progress Over Time */}
        <div className="bg-gray-800 p-4 rounded">
          <h3 className="text-xl font-semibold">Progress Over Time</h3>
          <Pie data={pieChartData} width={100} height={100} /> {/* Set width and height for the chart */}
        </div>
      </div>

      <button
        onClick={downloadReport}
        className="mt-4 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 flex items-center"
      >
        <FontAwesomeIcon icon={faDownload} className="mr-2" />
        Download PDF
      </button>
    </div>
  );
}

export default AnalyticsReports;
