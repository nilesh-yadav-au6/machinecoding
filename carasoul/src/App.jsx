import { useEffect, useState } from "react";
import "./App.css";
import Carasoul from "./components/Carasoul";

function App() {
  const [loading, setLoading] = useState();
  const [images, setImages] = useState([]);

  const fetchImages = async (imgLimit) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/photos?_limit=${imgLimit}`
      );
      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages(8);
  }, []);
  return (
    <>
      <div className="carasoul-container">
        <Carasoul images={images} imageLimit={5} imagesPerSlide={2} />
      </div>
    </>
  );
}

export default App;
