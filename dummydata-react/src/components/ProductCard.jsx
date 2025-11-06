function ProductCard({ product, mode = "simple" }) {
  const { title, price, category, thumbnail } = product;

  return (
    <article className="card">
      {thumbnail && (
        <img src={thumbnail} alt={title} className="card-image" loading="lazy" />
      )}
      <div className="card-body">
        <h3 className="card-title">{title}</h3>

        {mode === "detailed" && (
          <ul className="card-list">
            <li><strong>Price:</strong> ${price}</li>
            <li><strong>Category:</strong> {category}</li>
          </ul>
        )}
      </div>
    </article>
  );
}

export default ProductCard;
