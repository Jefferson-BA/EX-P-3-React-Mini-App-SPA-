import { useEffect, useState } from "react";
import { fetchProducts } from "../api/dummyApi";
import ProductCard from "../components/ProductCard";

function Entities() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const data = await fetchProducts(20);
        setProducts(data);
      } catch (err) {
        setError("Error loading entities.");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <section>
      <h2 className="section-title">Entities</h2>
      <p className="section-subtitle">
        Listado de productos con título, precio y categoría.
      </p>

      {loading && <p>Cargando...</p>}
      {error && <p className="error">{error}</p>}

      <div className="grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} mode="detailed" />
        ))}
      </div>
    </section>
  );
}

export default Entities;
