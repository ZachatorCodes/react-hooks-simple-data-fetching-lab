import React, {useState, useEffect} from "react";

function App() {
  const [image, setImage] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(response => response.json())
      .then(data => {
        setImage(data.message);
        setIsLoaded(true);
      })
  }, []);

  if (isLoaded === false) {
    return <p>Loading...</p>
  }

  return (
    <img alt="A Random Dog" src={image}></img>
  );
}

export default App;