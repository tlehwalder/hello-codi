import { useEffect, useState } from "react";
import { Product } from "@/pages/api/products";
import styles from "../styles/Home.module.css";

// TODO: 1. fetch products
// TODO: 2. render products
// TODO: 3. conditional styles (isPromotion)
// TODO: 4. clientside search/filtering on product.name
// TODO: 5. responsive design

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [search, setSearch] = useState("");

  // TODO: @solution
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/api/products");
      const products = await response.json();
      console.log(products);
      setProducts(products);
    };

    fetchProducts();
  }, []);

  return (
    <div className={styles.container}>
      <h1>hello codi 👋</h1>
      <div className={styles.container}>
        <span className={styles.title}>Suche 🔍</span>
        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>
      <div className={styles.container}>
        <span className={styles.title}>Produkte 📦</span>
        <div style={{ display: "flex", gap: "1rem" }}>
          {categories.map((category) => (
            <button
              key={category}
              style={{
                padding: "0.5rem",
                borderRadius: "1rem",
                backgroundColor: "rebeccapurple",
                color: "white",
                textTransform: "capitalize",
              }}
              onClick={() => {
                setCategories((prevState) =>
                  prevState.filter(
                    (currentCategory) => currentCategory !== category,
                  ),
                );
              }}
            >
              {category}
            </button>
          ))}
        </div>
        {/* TODO: render products here*/}
        {products
          .filter(
            (product) =>
              product.title.toLowerCase().includes(search.toLowerCase()) &&
              (categories.length === 0 ||
                categories.some((category) =>
                  product.categories.includes(category),
                )),
          )
          .map((product) => {
            return (
              <div
                key={product.id}
                style={{
                  padding: "1rem",
                  display: "flex",
                  backgroundColor: "white",
                  borderRadius: "1rem",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <img style={{ width: "5rem" }} src={product.imgUrl} />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    alignItems: "flex-end",
                  }}
                >
                  <span style={{ fontSize: "1.25rem" }}>{product.title}</span>
                  <span
                    style={{
                      fontSize: "1.5rem",
                      color: product.isPromotion ? "red" : "black",
                    }}
                  >
                    {product.price} €
                  </span>
                  <div style={{ display: "flex", gap: "1rem" }}>
                    {product.categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => {
                          if (!categories.includes(category)) {
                            setCategories((prevState) => [
                              ...prevState,
                              category,
                            ]);
                          }
                        }}
                        style={{
                          padding: "0.5rem",
                          borderRadius: "1rem",
                          backgroundColor: "rebeccapurple",
                          color: "white",
                          textTransform: "capitalize",
                        }}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
