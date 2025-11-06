import { useEffect, useState } from "react";
import { fetchProducts } from "../api/dummyApi";
import ProductCard from "../components/ProductCard";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const data = await fetchProducts(8);
        setProducts(data);
      } catch (err) {
        setError("Error loading products.");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <section>
      

      <h3 className="section-title">Productos destacados</h3>

      {loading && <p>Cargando...</p>}
      {error && <p className="error">{error}</p>}

      <div className="grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} mode="simple" />
        ))}
      </div>
    </section>
  );
}

export default Home;
