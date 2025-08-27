export function ProductCard({ product, ref }) {
  return (
    <div className="product-card" ref={ref}>
      <img src={product.image} alt={product.name} className="product-image" />
      <h2 className="product-name">{product.name}</h2>
      <p className="product-description">{product.description}</p>
      <p className="product-price">
        {product.currency} {product.price}
      </p>
    </div>
  );
}
