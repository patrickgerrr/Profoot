import React, { useState } from 'react';
import Calendar from 'react-calendar'; // Importing the Calendar component
import 'react-calendar/dist/Calendar.css'; // Importing the calendar styles

const Diet = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Sample diet plans for each day (for demonstration)
  const dietPlans = {
    '2024-11-05': {
      breakfast: {
        meal: 'Oatmeal with fruits',
        quantity: '1 bowl',
        nutrition: {
          carbs: '30g',
          protein: '5g',
          fat: '2g',
        },
      },
      lunch: {
        meal: 'Grilled chicken salad',
        quantity: '1 plate',
        nutrition: {
          carbs: '20g',
          protein: '30g',
          fat: '10g',
        },
      },
      dinner: {
        meal: 'Steamed vegetables with fish',
        quantity: '1 serving',
        nutrition: {
          carbs: '15g',
          protein: '25g',
          fat: '5g',
        },
      },
    },
    '2024-11-06': {
      breakfast: {
        meal: 'Smoothie bowl',
        quantity: '1 bowl',
        nutrition: {
          carbs: '35g',
          protein: '8g',
          fat: '4g',
        },
      },
      lunch: {
        meal: 'Quinoa with black beans',
        quantity: '1 cup',
        nutrition: {
          carbs: '40g',
          protein: '15g',
          fat: '3g',
        },
      },
      dinner: {
        meal: 'Pasta with tomato sauce',
        quantity: '1 plate',
        nutrition: {
          carbs: '60g',
          protein: '10g',
          fat: '8g',
        },
      },
    },
    // Add more dates and meal plans as needed
  };

  const renderMealsForSelectedDate = () => {
    const dateKey = selectedDate.toISOString().split('T')[0]; // Format date as YYYY-MM-DD
    const meals = dietPlans[dateKey];

    if (!meals) {
      return <p>No meals planned for this date.</p>;
    }

    return (
      <div className="grid grid-cols-3 gap-4 mt-4 border-white-500">
        <div className="card bg-gray-800 p-4 rounded-lg shadow-lg">
          <h3 className="text-lg font-bold">Breakfast</h3>
          <p><strong>Meal:</strong> {meals.breakfast.meal}</p>
          <p><strong>Quantity:</strong> {meals.breakfast.quantity}</p>
          <p><strong>Nutrition:</strong> {meals.breakfast.nutrition.carbs} carbs, {meals.breakfast.nutrition.protein} protein, {meals.breakfast.nutrition.fat} fat</p>
        </div>

        <div className="card bg-gray-800 p-4 rounded-lg shadow-lg">
          <h3 className="text-lg font-bold">Lunch</h3>
          <p><strong>Meal:</strong> {meals.lunch.meal}</p>
          <p><strong>Quantity:</strong> {meals.lunch.quantity}</p>
          <p><strong>Nutrition:</strong> {meals.lunch.nutrition.carbs} carbs, {meals.lunch.nutrition.protein} protein, {meals.lunch.nutrition.fat} fat</p>
        </div>

        <div className="card bg-gray-800 p-4 rounded-lg shadow-lg">
          <h3 className="text-lg font-bold">Dinner</h3>
          <p><strong>Meal:</strong> {meals.dinner.meal}</p>
          <p><strong>Quantity:</strong> {meals.dinner.quantity}</p>
          <p><strong>Nutrition:</strong> {meals.dinner.nutrition.carbs} carbs, {meals.dinner.nutrition.protein} protein, {meals.dinner.nutrition.fat} fat</p>
        </div>
      </div>
    );
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Diet</h2>
      <div className="mb-4">
        <Calendar
          onChange={setSelectedDate}
          value={selectedDate}
          className="big-calendar" // Custom class for styling
        />
      </div>
      <div className="card bg-gray-800 p-6 rounded-lg shadow-lg">
        {renderMealsForSelectedDate()}
      </div>
    </div>
  );
};

export default Diet;
