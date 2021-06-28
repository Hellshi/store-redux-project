import classes from "./CartButton.module.css";
import { UIActions } from "../../store/UI-slice";
import { useDispatch } from "react-redux";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(UIActions.toggle());
  };
  return (
    <button onClick={handleToggle} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
