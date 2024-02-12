function Cart() {
  const priceMonstera = 8;
  const priceLierre = 10;
  const priceBouquet = 15;

  return (
    <div>
      <h2>Panier</h2>
      <ul>
        <li>Monstera : {priceMonstera}€</li>
        <li>Lierre : {priceLierre}€</li>
        <li>Monstera : {priceBouquet}€</li>
      </ul>
      Total : {priceMonstera + priceLierre + priceBouquet}€
    </div>
  );
}

export default Cart;
