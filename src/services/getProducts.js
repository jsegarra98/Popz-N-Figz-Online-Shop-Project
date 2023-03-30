const getProducts = async () => {
  // TODO Fetch products and prices from the Stripe API
  // Use the following URL for your fetch request
  const url = `${process.env.REACT_APP_API_URL}/products`;

  const productsresponse = await fetch(url);

  const products = await productsresponse.json();
  console.log(products);
  console.log(products[0].name);

  return products;
};

export { getProducts };
