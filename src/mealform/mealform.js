import Input from "../UI/input"
import classes from './form.module.css';
const MealForm = ()=> {
    return (
        <form className={classes.form}>
          <Input label="Amount" input={{
            id:'amount',
            type:'number',
            min:'1',
            max:'5',
            step:'1',
            default:'1'
          }} />
          <button>+Add</button>  
        </form>
    )
}
export default MealForm