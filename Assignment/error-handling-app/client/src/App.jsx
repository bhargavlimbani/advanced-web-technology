import { useEffect, useState } from "react";

function App() {

  const [message,setMessage] = useState("");
  const [error,setError] = useState("");

  useEffect(() => {

    fetch("http://localhost:5000/api/error")
    .then(res => res.json())
    .then(data => {

      if(data.success === false){
        setError(data.message);
      } else {
        setMessage(data.message);
      }

    })
    .catch(err => {
      setError("Frontend error occurred");
    });

  }, []);

  return (
    <div style={{textAlign:"center", marginTop:"50px"}}>

      <h1>React + Node Error Handling</h1>

      {message && <h2>{message}</h2>}

      {error && <h2 style={{color:"red"}}>{error}</h2>}

    </div>
  )
}

export default App