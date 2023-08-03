import MealForm from '../mealform/mealform';
import classes from './mealitem.module.css';

const MealItem = (props) => {
    const money = typeof props.price === 'number' ? `$${props.price.toFixed(2)}` : '';

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.Description}>{props.Description}</div>
                <div className={classes.price}>{money}</div>
            </div>
            <div><MealForm /></div>
        </li>
    );
}

export default MealItem;
