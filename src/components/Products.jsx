import Product from "../components/Product";
import { checkout } from "../services/checkout";

const Products = ({ products }) => {
  const productsToRender = products.map((product) => {
    const {
      id,
      name,
      description,
      imageUr1 = product.images[0],
      price = product.prices[0].unit_amount / 100,
      priceId = product.prices[0].id,
    } = product;

    return (
      <Product
        key={id}
        name={name}
        description={description}
        src={imageUr1}
        price={price}
        onCheckout={() => checkout(priceId)}
      />
    );
  });

  return <ul className='product-grid'>{productsToRender}</ul>;
};
export default Products;
