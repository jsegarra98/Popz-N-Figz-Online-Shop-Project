const Product = ({ name, description, src, price, onCheckout }) => {
  return (
    <li className='product-grid-item'>
      <img src={src} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>${price} NZD</p>
      <button onClick={onCheckout}>Buy now</button>
    </li>
  );
};

export default Product;
