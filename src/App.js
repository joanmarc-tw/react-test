import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/hello`)
      .then((res) => res.text())
      .then(setMessage)
      .catch((err) => {
        console.error(err);
        setMessage("Failed to fetch from backend");
      });
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "3rem" }}>
      <h1>{message}</h1>
    </div>
  );
}

export default App;
