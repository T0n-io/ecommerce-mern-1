import logo from './logo.svg';
import './App.css';
import data from './data';

function App() {
  return (
    <div>
      <header>
        <a href="/">amazona</a>
      </header>
      <main>
        <h1>Featured Products</h1>

        <div className="products">
          {data.products.map((product) => (
            <div key={product.slug} className="product">
              <a href={`/product/${product.slug}`}>
                <img src={product.image} alt={product.name} />
              </a>
              <div className="product-info">
                <a href={`/product/${product.slug}`}>
                  <p><strong>{product.name}</strong></p>
                </a>
                <p>{product.price} €</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>

  );
}

export default App;
