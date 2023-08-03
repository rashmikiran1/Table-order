import MealSummary from "./mealSummary";
import AvailableMeals from "./availableMeal";
import React, {Fragment} from "react";
const Mymeals = () => {
    return (
        <Fragment>
            <MealSummary />
            <AvailableMeals />
        </Fragment>
    )
}
export default Mymeals