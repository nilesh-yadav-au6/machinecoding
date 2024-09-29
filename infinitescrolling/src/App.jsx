import { useCallback, useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState({});
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://dummyjson.com/products?limit=${page * 10}`
      );
      const data = await res.json();
      console.log(data);
      if (data) {
        setProducts(data);
        setPage(page + 1);
      }
    } catch (err) {
      // setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const allProucts = products.products;

  useEffect(() => {
    fetchProducts();
  }, []);

  const throttle = (cd, d) => {
    let last = 0;
    return (...args) => {
      const now = new Date().getTime();
      if (now - last < d) return;
      last = now;
      return cd(...args);
    };
  };

  const handleScroll = throttle(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 500 >
        document.documentElement.offsetHeight &&
      !loading &&
      products.limit < products.total
    ) {
      fetchProducts();
    }
  }, 500);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
      {allProucts?.length > 0 &&
        allProucts?.map((item) => {
          return (
            <div key={item.title}>
              <img src={item.thumbnail} alt={item.title} />
            </div>
          );
        })}

      {loading && <p>Loading....</p>}
    </div>
  );
}

export default App;
