import { useCallback, useEffect, useRef, useState } from "react";
import { ProductCard } from "./components/product-card";
import { fetchNextProduct } from "./utils/fetch-next-product";

export function InfiniteScroll() {
  const [products, setProducts] = useState([]);
  const page = useRef(1);
  const observer = useRef();
  const lastProduct = useRef();

  const didFetch = useRef(false);

  const fetchMore = useCallback(async () => {
    if (page.current === 1 && products.length > 0) return;

    const data = await fetchNextProduct(page.current);
    page.current++;
    setProducts((prev) => [...prev, ...data]);
  }, [products]);

  useEffect(() => {
    if (!lastProduct.current) return;

    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchMore();
        }
      },
      { threshold: 1 }
    );
    observer.current.observe(lastProduct.current);
    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [fetchMore, products]);

  useEffect(() => {
    if (didFetch.current) return;
    didFetch.current = true;
    fetchMore();
  }, [fetchMore]);

  return (
    <div>
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          ref={index === products.length - 1 ? lastProduct : null}
        />
      ))}
    </div>
  );
}
