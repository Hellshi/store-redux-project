import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const cart = useSelector((state) => state.cart.itens);
  console.log(cart);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cart.length === 0 && <p>Your cart is empty :(</p>}
        {cart.map((item) => (
          <CartItem
            key={item.itemId}
            item={{
              title: item.name,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
              id: item.itemId,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
