import "../App.css";
import Navbar from "../components/Navbar";
import Product from "../components/Product";


const ItemListContainer = () => {
  const categories = appState.catalog.map((category) => category.name);
  const cart = appState.cart;

  const products = appState.catalog.reduce((accum, current) => {
    const productsWithCategory = current.products.map((product) => {
      return { category: current.name, ...product };
    });
    return [...accum, ...productsWithCategory];
  }, []);

  
  return (
    <>
      <Navbar categories={categories} cart={cart} />
      <div className="content">
        {products.map((product) => (
          <Product
            key={product.id}
            title={product.name}
            image={product.imageUrl}
            category={product.category}
            price={product.price}
            stock={product.stock}
          />
        ))}
      </div>
    </>
  );
};

export default ItemListContainer;
