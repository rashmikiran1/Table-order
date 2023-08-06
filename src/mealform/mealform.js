import React, { useContext } from 'react';
import Input from '../UI/input';
import classes from './form.module.css';
import CartContext from '../context/cartContext'; 

const MealForm = (props) => {
  const cartCtx = useContext(CartContext); 

  const addToCartHandler = (event) => {
    event.preventDefault();
    const quantity = +event.target.amount.value;

    cartCtx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: quantity,
    });
  };

  return (
    <form className={classes.form} onSubmit={addToCartHandler}>
      <Input
        label="Amount"
        input={{
          id: 'amount',
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+Add</button>
    </form>
  );
};

export default MealForm;
