import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const toggleCart = () => {
    dispatch(uiActions.toggle());
  }

  return (
    <button className={classes.button} onClick={toggleCart} >
      <span>My Cart</span>
      <span className={classes.badge}>{ cartQuantity }</span>
    </button>
  );
};

export default CartButton;
