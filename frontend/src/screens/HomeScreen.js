import { Link } from "react-router-dom";
import data from "../data";

function HomeScreen() {
    return <div>
        <h1>Featured Products</h1>
        <div className="products">
            {data.products.map((product) => (
                <div key={product.slug} className="product">
                    <Link to={`/product/${product.slug}`}>
                        <img src={product.image} alt={product.name} />
                    </Link>
                    <div className="product-info">
                        <Link to={`/product/${product.slug}`}>
                             <p><strong>{product.name}</strong></p>
                        </Link> 
                        <p>{product.price} €</p>
                    </div>
                </div>
            ))}
        </div></div>
}
export default HomeScreen;