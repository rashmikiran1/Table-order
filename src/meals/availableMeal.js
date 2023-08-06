import React from 'react';
import Card from '../UI/card';
import classes from './meals.module.css';
import MealItem from '../mealitem/mealItem';
import MealForm from '../mealform/mealform';

const mealsData = [
    {
        id: '1',
        name: 'Pasta',
        price: '200',
        Description: 'vegetarian',
    },
    {
        id: '2',
        name: 'Burger',
        price: '150',
        Description: 'vegetarian',
    },
    {
        id: '3',
        name: 'Pizza',
        price: '190',
        Description: 'vegetarian',
    },
    {
        id: '4',
        name: 'Palakpaneer',
        price: '100',
        Description: 'vegetarian',
    },
    {
        id: '5',
        name: 'Chicken',
        price: '300',
        Description: 'non-vegetarian',
    },
];

const AvailableMeals = () => {
    const mealItems = mealsData.map((meal) => (
        <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            Description={meal.Description}
            price={meal.price}
        />
    ));

    return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealItems}</ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;
