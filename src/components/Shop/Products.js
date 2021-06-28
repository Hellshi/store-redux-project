import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DummyItens = [
  {
    id: 1,
    price: 22,
    name: "Dummy book",
  },

  {
    id: 2,
    price: 72,
    name: "Loosing it",
  },

  {
    id: 9,
    price: 28,
    name: "Dummy dummy",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DummyItens.map((item) => (
          <ProductItem
            title={item.name}
            price={item.price}
            description="This is a first product - amazing!"
            itemId={item.id}
            key={item.id}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
