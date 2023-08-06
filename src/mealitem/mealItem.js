import classes from './mealitem.module.css';
import MealForm from '../mealform/mealform';

const MealItem = (props) => {
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.Description}</div>
        <div className={classes.price}>Rs.{props.price}</div>
      </div>
      <div>
        <MealForm id={props.id} name={props.name} price={props.price} />
      </div>
    </li>
  );
};

export default MealItem;
