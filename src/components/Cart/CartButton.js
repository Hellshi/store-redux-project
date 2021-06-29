import classes from "./CartButton.module.css";
import { UIActions } from "../../store/UI-slice";
import { useDispatch, useSelector } from "react-redux";

const CartButton = (props) => {
  const cart = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(UIActions.toggle());
  };
  return (
    <button onClick={handleToggle} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cart}</span>
    </button>
  );
};

export default CartButton;
