import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "@material-ui/core";

function App() {
  const [word, setword] = useState("");
  const [meanings, setmeanings] = useState([]);

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        "https://api.dictionaryapi.dev/api/v2/entries/en/plane"
      );

      setmeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(meanings);

  useEffect(() => {
    dictionaryApi();
  }, []);

  return (
    <div
      className="App"
      style={{ height: "100vh", backgroundColor: "#282c34", color: "white" }}
    >
      <Container
        maxWidth="md"
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        Dictionary
      </Container>
    </div>
  );
}

export default App;
