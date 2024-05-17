// create your App component here
import React, { useEffect, useState } from "react";

export default function App() {
  const [isImage, setIsImage] = useState([]);
  const [isLoaded, setisLoaded] = useState(false);
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((r) => r.json())
      .then((dog) => {
        setIsImage(dog.message);
        setisLoaded(true);
      });
  }, []);
  return (
    <div>
      {isLoaded ? <img src={isImage} alt="A Random Dog" /> : <p>Loading...</p>}
    </div>
  );
}
