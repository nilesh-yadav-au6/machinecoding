import { useState, useRef } from "react";

/* eslint-disable react/prop-types */
const Carasoul = ({
  images,
  imageLimit = images.length,
  imagesPerSlide = 1,
}) => {
  const imgRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageWidth, setImageWidth] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageLimit - 1 : prevIndex - 1
    );
  };
  const goToNext = () => {
    console.log("clikd");
    setCurrentIndex((prevIndex) =>
      prevIndex === imageLimit - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carasoul" style={{ width: imageWidth * imagesPerSlide }}>
      <div
        className="image-container"
        style={{ transform: `translateX(-${currentIndex * imageWidth}px)` }}
      >
        {images
          .slice(0, imageLimit > images.length - 1 ? images.length : imageLimit)
          .map((item) => {
            return (
              <img
                ref={imgRef}
                onLoad={() => setImageWidth(imgRef?.current?.offsetWidth)}
                key={item.id}
                alt={item.title}
                src={item.url}
                className="image"
              />
            );
          })}
      </div>
      <button onClick={goToPrev} className="btn prev">
        Prev
      </button>
      <button onClick={goToNext} className="btn next">
        Next
      </button>
    </div>
  );
};

export default Carasoul;
