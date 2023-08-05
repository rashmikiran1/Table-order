import React from "react";
import Card from "../UI/card";
import classes from './meals.module.css';
import MealItem from "../mealitem/mealItem";
const Meals = [
    {
        id:"1",
        name:'pasta',
        price:'200',
        Description:'vegetarian'
    },
    {
        id:"2",
        name:'burger',
        price:'150',
        Description:'vegetarian'
    },
    {
        id:"3",
        name:'pizza',
        price:'190',
        Description:'vegetarian'
    },
    {
        id:"4",
        name:'palakpaneer',
        price:'100',
        Description:'vegetarian'
    },
    {
        id:"5",
        name:'chicken',
        price:'300',
        Description:'non-vegetarian'
    }
]

const AvailableMeals = (props) => {
    const meal = Meals.map((Meal) => (
        <MealItem name={Meal.name} Description={Meal.Description} price={Meal.price} />
      ));
    return <section className={classes.meals}>
        <Card>
        <ul>{meal}</ul>
        </Card>
    </section>
}
export default AvailableMeals;