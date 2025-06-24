import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calender.css';
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  Title
);

const TrainingSchedule = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Updated training schedules with 10 days of workouts
  const trainingSchedules = {
    '2024-11-01': {
      morning: { workout: 'Jogging - 3 km', duration: '20 minutes', intensity: 'Moderate' },
      afternoon: { workout: 'Upper Body Strength', duration: '45 minutes', intensity: 'High' },
      evening: { workout: 'Stretching and Mobility', duration: '30 minutes', intensity: 'Low' },
    },
    '2024-11-02': {
      morning: { workout: 'Cycling - 10 km', duration: '30 minutes', intensity: 'Moderate' },
      afternoon: { workout: 'Lower Body Strength', duration: '45 minutes', intensity: 'High' },
      evening: { workout: 'Meditation', duration: '20 minutes', intensity: 'Low' },
    },
    '2024-11-03': {
      morning: { workout: 'Swimming - 1 km', duration: '30 minutes', intensity: 'Moderate' },
      afternoon: { workout: 'Core Training', duration: '40 minutes', intensity: 'High' },
      evening: { workout: 'Light Walking', duration: '30 minutes', intensity: 'Low' },
    },
    '2024-11-04': {
      morning: { workout: 'Yoga Session', duration: '30 minutes', intensity: 'Low' },
      afternoon: { workout: 'HIIT Cardio', duration: '25 minutes', intensity: 'High' },
      evening: { workout: 'Foam Rolling', duration: '20 minutes', intensity: 'Low' },
    },
    '2024-11-05': {
      morning: { workout: 'Running - 5 km', duration: '30 minutes', intensity: 'Moderate' },
      afternoon: { workout: 'Upper Body Strength', duration: '45 minutes', intensity: 'High' },
      evening: { workout: 'Yoga and Stretching', duration: '30 minutes', intensity: 'Low' },
    },
    '2024-11-06': {
      morning: { workout: 'Cycling - 20 km', duration: '60 minutes', intensity: 'Moderate' },
      afternoon: { workout: 'Lower Body Strength', duration: '45 minutes', intensity: 'High' },
      evening: { workout: 'Meditation', duration: '20 minutes', intensity: 'Low' },
    },
    '2024-11-07': {
      morning: { workout: 'Rowing Machine - 2 km', duration: '15 minutes', intensity: 'Moderate' },
      afternoon: { workout: 'Full Body Circuit', duration: '50 minutes', intensity: 'High' },
      evening: { workout: 'Tai Chi', duration: '25 minutes', intensity: 'Low' },
    },
    '2024-11-08': {
      morning: { workout: 'Hiking - 4 km', duration: '60 minutes', intensity: 'Moderate' },
      afternoon: { workout: 'Plyometric Training', duration: '30 minutes', intensity: 'High' },
      evening: { workout: 'Breathing Exercises', duration: '15 minutes', intensity: 'Low' },
    },
    '2024-11-09': {
      morning: { workout: 'Jump Rope', duration: '15 minutes', intensity: 'Moderate' },
      afternoon: { workout: 'Upper Body Circuit', duration: '45 minutes', intensity: 'High' },
      evening: { workout: 'Stretching', duration: '30 minutes', intensity: 'Low' },
    },
    '2024-11-10': {
      morning: { workout: 'Jogging - 4 km', duration: '25 minutes', intensity: 'Moderate' },
      afternoon: { workout: 'Leg Day Strength', duration: '50 minutes', intensity: 'High' },
      evening: { workout: 'Foam Rolling and Recovery', duration: '20 minutes', intensity: 'Low' },
    },
    '2024-11-11': {
      morning: { workout: 'Jogging - 3 km', duration: '20 minutes', intensity: 'Moderate' },
      afternoon: { workout: 'Upper Body Strength', duration: '45 minutes', intensity: 'High' },
      evening: { workout: 'Stretching and Mobility', duration: '30 minutes', intensity: 'Low' },
    },
    '2024-11-12': {
      morning: { workout: 'Cycling - 10 km', duration: '30 minutes', intensity: 'Moderate' },
      afternoon: { workout: 'Lower Body Strength', duration: '45 minutes', intensity: 'High' },
      evening: { workout: 'Meditation', duration: '20 minutes', intensity: 'Low' },
    },
    '2024-11-13': {
      morning: { workout: 'Swimming - 1 km', duration: '30 minutes', intensity: 'Moderate' },
      afternoon: { workout: 'Core Training', duration: '40 minutes', intensity: 'High' },
      evening: { workout: 'Light Walking', duration: '30 minutes', intensity: 'Low' },
    },
    '2024-11-14': {
      morning: { workout: 'Yoga Session', duration: '30 minutes', intensity: 'Low' },
      afternoon: { workout: 'HIIT Cardio', duration: '25 minutes', intensity: 'High' },
      evening: { workout: 'Foam Rolling', duration: '20 minutes', intensity: 'Low' },
    },
    '2024-11-15': {
      morning: { workout: 'Running - 5 km', duration: '30 minutes', intensity: 'Moderate' },
      afternoon: { workout: 'Upper Body Strength', duration: '45 minutes', intensity: 'High' },
      evening: { workout: 'Yoga and Stretching', duration: '30 minutes', intensity: 'Low' },
    },
    '2024-11-16': {
      morning: { workout: 'Cycling - 20 km', duration: '60 minutes', intensity: 'Moderate' },
      afternoon: { workout: 'Lower Body Strength', duration: '45 minutes', intensity: 'High' },
      evening: { workout: 'Meditation', duration: '20 minutes', intensity: 'Low' },
    },
    '2024-11-17': {
      morning: { workout: 'Rowing Machine - 2 km', duration: '15 minutes', intensity: 'Moderate' },
      afternoon: { workout: 'Full Body Circuit', duration: '50 minutes', intensity: 'High' },
      evening: { workout: 'Tai Chi', duration: '25 minutes', intensity: 'Low' },
    },
    '2024-11-18': {
      morning: { workout: 'Hiking - 4 km', duration: '60 minutes', intensity: 'Moderate' },
      afternoon: { workout: 'Plyometric Training', duration: '30 minutes', intensity: 'High' },
      evening: { workout: 'Breathing Exercises', duration: '15 minutes', intensity: 'Low' },
    },
    '2024-11-19': {
      morning: { workout: 'Jump Rope', duration: '15 minutes', intensity: 'Moderate' },
      afternoon: { workout: 'Upper Body Circuit', duration: '45 minutes', intensity: 'High' },
      evening: { workout: 'Stretching', duration: '30 minutes', intensity: 'Low' },
    },
    '2024-11-20': {
      morning: { workout: 'Jogging - 4 km', duration: '25 minutes', intensity: 'Moderate' },
      afternoon: { workout: 'Leg Day Strength', duration: '50 minutes', intensity: 'High' },
      evening: { workout: 'Foam Rolling and Recovery', duration: '20 minutes', intensity: 'Low' },
    }
  };

  const renderWorkoutsForSelectedDate = () => {
    const dateKey = selectedDate.toISOString().split('T')[0];
    const workouts = trainingSchedules[dateKey];

    if (!workouts) {
      return <p>No workouts planned for this date.</p>;
    }

    return (
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="card border border-white bg-gray-800 p-4 rounded-lg shadow-lg">
          <h3 className="text-lg font-bold">Morning</h3>
          <p><strong>Workout:</strong> {workouts.morning.workout}</p>
          <p><strong>Duration:</strong> {workouts.morning.duration}</p>
          <p><strong>Intensity:</strong> {workouts.morning.intensity}</p>
        </div>

        <div className="card border border-white bg-gray-800 p-4 rounded-lg shadow-lg">
          <h3 className="text-lg font-bold">Afternoon</h3>
          <p><strong>Workout:</strong> {workouts.afternoon.workout}</p>
          <p><strong>Duration:</strong> {workouts.afternoon.duration}</p>
          <p><strong>Intensity:</strong> {workouts.afternoon.intensity}</p>
        </div>

        <div className="card border border-white bg-gray-800 p-4 rounded-lg shadow-lg">
          <h3 className="text-lg font-bold">Evening</h3>
          <p><strong>Workout:</strong> {workouts.evening.workout}</p>
          <p><strong>Duration:</strong> {workouts.evening.duration}</p>
          <p><strong>Intensity:</strong> {workouts.evening.intensity}</p>
        </div>
      </div>
    );
  };

  const barChartData = {
    labels: ['Morning', 'Afternoon', 'Evening'],
    datasets: [
      {
        label: 'Workout Intensity',
        data: [7, 9, 3], // Replace with actual intensity values
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
    ],
  };

  const lineChartData = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],
    datasets: [
      {
        label: 'Performance Over Time',
        data: [3, 6, 8, 5, 9], // Replace with actual performance metrics
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
      },
    ],
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 flex justify-center">Training Schedule</h2>
      <div className="mb-4 flex justify-center">
        <Calendar
          onChange={setSelectedDate}
          value={selectedDate}
          className="big-calendar"
        />
      </div>
      <div className="card bg-gray-800 p-6 rounded-lg shadow-lg">
        {renderWorkoutsForSelectedDate()}
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">Performance Chart</h3>
        <Bar data={barChartData} className="mb-8" />
        <h3 className="text-xl font-bold mb-4">Performance Line Chart</h3>
        <Line data={lineChartData} />
      </div>
    </div>
  );
};

export default TrainingSchedule;
