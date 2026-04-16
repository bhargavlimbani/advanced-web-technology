import React, { useState, useEffect } from "react";

const images = [
  "/images/1.jpeg",
  "/images/7.jpeg",
  "/images/13.jpeg"
];

function Carousel() {
  const [index, setIndex] = useState(0);

  // ✅ AUTO SLIDE CODE (ADD HERE)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const next = () => setIndex((index + 1) % images.length);
  const prev = () => setIndex((index - 1 + images.length) % images.length);

  return (
    <div style={{ textAlign: "center" }}>
      <img
        src={images[index]}
        alt="carousel"
        style={{ width: "600px", height: "300px", objectFit: "cover" }}
      />
      <br /><br />
      <button onClick={prev}>Prev</button>
      <button onClick={next}>Next</button>
    </div>
  );
}

export default Carousel;