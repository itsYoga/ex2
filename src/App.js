import { useEffect, useState } from 'react';
import Axios from 'axios';

function App() {
  const [catFact, setCatFact] = useState("");

  useEffect(() => {
    Axios.get("https://catfact.ninja/fact")
      .then((response) => {
        console.log(response.data);
        setCatFact(response.data.fact);
      })
      .catch((error) => {
        console.error("Error fetching cat fact:", error);
      });
  }, []); // The empty dependency array means this effect runs once on component mount

  return (
    <div className="App">{catFact}</div>
  );
}

export default App;
