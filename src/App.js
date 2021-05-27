import React, { useState, useEffect } from "react";
import "./App.css";
const API = "21823321-99bf56fc4f3ba320d995d1fbf";

function App() {
  const [image, setImage] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      "https://pixabay.com/api/?key=21823321-99bf56fc4f3ba320d995d1fbf&q=yellow+flowers&image_type=photo&pretty=true"
    )
      .then((res) => res.json())
      .then((data) => {
        setImage(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  });

  return (
    <div className="App">
      <h1 className="text-6xl font-semibold">Yoooooo</h1>
    </div>
  );
}

export default App;
