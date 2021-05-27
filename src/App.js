import React, { useState, useEffect } from "react";
import "./App.css";
import ImagesCard from "./components/ImagesCard";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      "https://pixabay.com/api/?key=21823321-99bf56fc4f3ba320d995d1fbf&q=yellow+flowers&image_type=photo&pretty=true"
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  });

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-4">
        {images.map((image) => (
          <ImagesCard key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
}

export default App;
