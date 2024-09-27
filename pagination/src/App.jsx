import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await fetch(
      `https://dummyjson.com/products?limit=10&skip=${page * 10 - 10}`
    );
    const data = await res.json();

    if (data?.products) {
      setProducts(data.products);
      setTotalPages(data.total);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [page]);

  const selectPageHandler = (pageNumber) => {
    if (
      pageNumber >= 1 &&
      pageNumber <= totalPages / 10 &&
      pageNumber !== null
    ) {
      setPage(pageNumber);
    }
  };

  const goToPrev = () => {
    setPage(page - 1);
  };

  const goToNext = () => {
    setPage(page + 1);
  };

  return (
    <>
      <div className="product__container">
        {products.map((item) => {
          return (
            <div key={item.id}>
              <img
                src={item.thumbnail}
                alt={item.title}
                width={200}
                height={200}
                className="product_single"
              />
            </div>
          );
        })}
      </div>
      <div className="pagination__container">
        {page === 1 ? null : <span onClick={goToPrev}>prev</span>}
        {[...Array(Math.floor(totalPages / 10))].map((item, index) => (
          <span
            className={`${page === index + 1 ? "page__selected" : ""}`}
            key={index + 1}
            onClick={() => selectPageHandler(index + 1)}
          >
            {index + 1}
          </span>
        ))}
        {page === Math.floor(totalPages / 10) ? null : (
          <span onClick={goToNext}>next</span>
        )}
      </div>
    </>
  );
}

export default App;
