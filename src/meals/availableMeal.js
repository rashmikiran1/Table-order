import React from "react";
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

const AvailableMeals = () => {
    const meal = Meals.map(Meal => <li>{Meal.name}</li>);
    return <section className="meal">
        <ul>{meal}</ul>
    </section>
}
export default AvailableMeals;