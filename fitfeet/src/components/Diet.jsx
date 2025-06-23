import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Diet = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const dietPlans = {
    '2024-11-01': {
      breakfast: { meal: 'Greek yogurt with berries', quantity: '1 bowl', nutrition: { carbs: '20g', protein: '12g', fat: '4g' } },
      lunch: { meal: 'Chicken Caesar salad', quantity: '1 plate', nutrition: { carbs: '15g', protein: '30g', fat: '10g' } },
      dinner: { meal: 'Grilled salmon with quinoa', quantity: '1 serving', nutrition: { carbs: '25g', protein: '22g', fat: '8g' } },
    },
    '2024-11-02': {
      breakfast: { meal: 'Avocado toast', quantity: '2 slices', nutrition: { carbs: '40g', protein: '6g', fat: '12g' } },
      lunch: { meal: 'Turkey sandwich with veggies', quantity: '1 sandwich', nutrition: { carbs: '35g', protein: '25g', fat: '8g' } },
      dinner: { meal: 'Lentil soup with bread', quantity: '1 bowl', nutrition: { carbs: '30g', protein: '12g', fat: '3g' } },
    },
    '2024-11-03': {
      breakfast: { meal: 'Smoothie with spinach and banana', quantity: '1 glass', nutrition: { carbs: '35g', protein: '4g', fat: '1g' } },
      lunch: { meal: 'Tuna salad', quantity: '1 plate', nutrition: { carbs: '10g', protein: '25g', fat: '6g' } },
      dinner: { meal: 'Vegetable stir-fry with tofu', quantity: '1 bowl', nutrition: { carbs: '20g', protein: '15g', fat: '8g' } },
    },
    '2024-11-04': {
      breakfast: { meal: 'Oatmeal with nuts and honey', quantity: '1 bowl', nutrition: { carbs: '40g', protein: '8g', fat: '10g' } },
      lunch: { meal: 'Grilled chicken wrap', quantity: '1 wrap', nutrition: { carbs: '35g', protein: '30g', fat: '12g' } },
      dinner: { meal: 'Spaghetti with marinara sauce', quantity: '1 plate', nutrition: { carbs: '60g', protein: '12g', fat: '10g' } },
    },
    '2024-11-05': {
      breakfast: { meal: 'Pancakes with maple syrup', quantity: '3 pancakes', nutrition: { carbs: '50g', protein: '6g', fat: '8g' } },
      lunch: { meal: 'Veggie burger with sweet potato fries', quantity: '1 burger', nutrition: { carbs: '45g', protein: '15g', fat: '14g' } },
      dinner: { meal: 'Stuffed bell peppers', quantity: '2 peppers', nutrition: { carbs: '30g', protein: '10g', fat: '5g' } },
    },
    '2024-11-06': {
      breakfast: { meal: 'Fruit smoothie bowl', quantity: '1 bowl', nutrition: { carbs: '35g', protein: '8g', fat: '4g' } },
      lunch: { meal: 'Quinoa salad with beans', quantity: '1 bowl', nutrition: { carbs: '40g', protein: '15g', fat: '3g' } },
      dinner: { meal: 'Pasta with tomato sauce', quantity: '1 plate', nutrition: { carbs: '60g', protein: '10g', fat: '8g' } },
    },
    '2024-11-07': {
      breakfast: { meal: 'Greek yogurt with berries', quantity: '1 bowl', nutrition: { carbs: '20g', protein: '12g', fat: '4g' } },
      lunch: { meal: 'Chicken Caesar salad', quantity: '1 plate', nutrition: { carbs: '15g', protein: '30g', fat: '10g' } },
      dinner: { meal: 'Grilled salmon with quinoa', quantity: '1 serving', nutrition: { carbs: '25g', protein: '22g', fat: '8g' } },
    },
    '2024-11-08': {
      breakfast: { meal: 'Avocado toast', quantity: '2 slices', nutrition: { carbs: '40g', protein: '6g', fat: '12g' } },
      lunch: { meal: 'Turkey sandwich with veggies', quantity: '1 sandwich', nutrition: { carbs: '35g', protein: '25g', fat: '8g' } },
      dinner: { meal: 'Lentil soup with bread', quantity: '1 bowl', nutrition: { carbs: '30g', protein: '12g', fat: '3g' } },
    },
    '2024-11-09': {
      breakfast: { meal: 'Smoothie with spinach and banana', quantity: '1 glass', nutrition: { carbs: '35g', protein: '4g', fat: '1g' } },
      lunch: { meal: 'Tuna salad', quantity: '1 plate', nutrition: { carbs: '10g', protein: '25g', fat: '6g' } },
      dinner: { meal: 'Vegetable stir-fry with tofu', quantity: '1 bowl', nutrition: { carbs: '20g', protein: '15g', fat: '8g' } },
    },
    '2024-11-10': {
      breakfast: { meal: 'Oatmeal with nuts and honey', quantity: '1 bowl', nutrition: { carbs: '40g', protein: '8g', fat: '10g' } },
      lunch: { meal: 'Grilled chicken wrap', quantity: '1 wrap', nutrition: { carbs: '35g', protein: '30g', fat: '12g' } },
      dinner: { meal: 'Spaghetti with marinara sauce', quantity: '1 plate', nutrition: { carbs: '60g', protein: '12g', fat: '10g' } },
    },
    '2024-11-11': {
      breakfast: { meal: 'Pancakes with maple syrup', quantity: '3 pancakes', nutrition: { carbs: '50g', protein: '6g', fat: '8g' } },
      lunch: { meal: 'Veggie burger with sweet potato fries', quantity: '1 burger', nutrition: { carbs: '45g', protein: '15g', fat: '14g' } },
      dinner: { meal: 'Stuffed bell peppers', quantity: '2 peppers', nutrition: { carbs: '30g', protein: '10g', fat: '5g' } },
    },
    '2024-11-12': {
      breakfast: { meal: 'Fruit smoothie bowl', quantity: '1 bowl', nutrition: { carbs: '35g', protein: '8g', fat: '4g' } },
      lunch: { meal: 'Quinoa salad with beans', quantity: '1 bowl', nutrition: { carbs: '40g', protein: '15g', fat: '3g' } },
      dinner: { meal: 'Pasta with tomato sauce', quantity: '1 plate', nutrition: { carbs: '60g', protein: '10g', fat: '8g' } },
    },
    '2024-11-13': {
      breakfast: { meal: 'Greek yogurt with berries', quantity: '1 bowl', nutrition: { carbs: '20g', protein: '12g', fat: '4g' } },
      lunch: { meal: 'Chicken Caesar salad', quantity: '1 plate', nutrition: { carbs: '15g', protein: '30g', fat: '10g' } },
      dinner: { meal: 'Grilled salmon with quinoa', quantity: '1 serving', nutrition: { carbs: '25g', protein: '22g', fat: '8g' } },
    },
    '2024-11-14': {
      breakfast: { meal: 'Avocado toast', quantity: '2 slices', nutrition: { carbs: '40g', protein: '6g', fat: '12g' } },
      lunch: { meal: 'Turkey sandwich with veggies', quantity: '1 sandwich', nutrition: { carbs: '35g', protein: '25g', fat: '8g' } },
      dinner: { meal: 'Lentil soup with bread', quantity: '1 bowl', nutrition: { carbs: '30g', protein: '12g', fat: '3g' } },
    },
    '2024-11-15': {
      breakfast: { meal: 'Smoothie with spinach and banana', quantity: '1 glass', nutrition: { carbs: '35g', protein: '4g', fat: '1g' } },
      lunch: { meal: 'Tuna salad', quantity: '1 plate', nutrition: { carbs: '10g', protein: '25g', fat: '6g' } },
      dinner: { meal: 'Vegetable stir-fry with tofu', quantity: '1 bowl', nutrition: { carbs: '20g', protein: '15g', fat: '8g' } },
    },
    '2024-11-16': {
      breakfast: { meal: 'Oatmeal with nuts and honey', quantity: '1 bowl', nutrition: { carbs: '40g', protein: '8g', fat: '10g' } },
      lunch: { meal: 'Grilled chicken wrap', quantity: '1 wrap', nutrition: { carbs: '35g', protein: '30g', fat: '12g' } },
      dinner: { meal: 'Spaghetti with marinara sauce', quantity: '1 plate', nutrition: { carbs: '60g', protein: '12g', fat: '10g' } },
    },
    '2024-11-17': {
      breakfast: { meal: 'Pancakes with maple syrup', quantity: '3 pancakes', nutrition: { carbs: '50g', protein: '6g', fat: '8g' } },
      lunch: { meal: 'Veggie burger with sweet potato fries', quantity: '1 burger', nutrition: { carbs: '45g', protein: '15g', fat: '14g' } },
      dinner: { meal: 'Stuffed bell peppers', quantity: '2 peppers', nutrition: { carbs: '30g', protein: '10g', fat: '5g' } },
    },
    '2024-11-18': {
      breakfast: { meal: 'Fruit smoothie bowl', quantity: '1 bowl', nutrition: { carbs: '35g', protein: '8g', fat: '4g' } },
      lunch: { meal: 'Quinoa salad with beans', quantity: '1 bowl', nutrition: { carbs: '40g', protein: '15g', fat: '3g' } },
      dinner: { meal: 'Pasta with tomato sauce', quantity: '1 plate', nutrition: { carbs: '60g', protein: '10g', fat: '8g' } },
    }
    // Continue to fill out the rest of November in a similar pattern...
  };

  const renderMealsForSelectedDate = () => {
    const dateKey = selectedDate.toISOString().split('T')[0];
    const meals = dietPlans[dateKey];

    if (!meals) {
      return <p>No meals planned for this date.</p>;
    }

    return (
      <div className="grid grid-cols-3 gap-4 mt-4 border-white-500">
        <div className="card border border-white bg-gray-800 p-4 rounded-lg shadow-lg">
          <h3 className="text-lg font-bold">Breakfast</h3>
          <p><strong>Meal:</strong> {meals.breakfast.meal}</p>
          <p><strong>Quantity:</strong> {meals.breakfast.quantity}</p>
          <p><strong>Nutrition:</strong> {meals.breakfast.nutrition.carbs} carbs, {meals.breakfast.nutrition.protein} protein, {meals.breakfast.nutrition.fat} fat</p>
        </div>

        <div className="card border border-white bg-gray-800 p-4 rounded-lg shadow-lg">
          <h3 className="text-lg font-bold">Lunch</h3>
          <p><strong>Meal:</strong> {meals.lunch.meal}</p>
          <p><strong>Quantity:</strong> {meals.lunch.quantity}</p>
          <p><strong>Nutrition:</strong> {meals.lunch.nutrition.carbs} carbs, {meals.lunch.nutrition.protein} protein, {meals.lunch.nutrition.fat} fat</p>
        </div>

        <div className="card border border-white bg-gray-800 p-4 rounded-lg shadow-lg">
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
      <h2 className="text-2xl font-bold mb-4 flex justify-center">Diet</h2>
      <div className="mb-4 flex justify-center">
        <Calendar
          onChange={setSelectedDate}
          value={selectedDate}
          className="big-calendar"
        />
      </div>
      <div className="card bg-gray-800 p-6 rounded-lg shadow-lg">
        {renderMealsForSelectedDate()}
      </div>
    </div>
  );
};

export default Diet;
