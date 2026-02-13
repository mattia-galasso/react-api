import axios from "axios";
import { useEffect, useState } from "react";

const apiURL = "https://lanciweb.github.io/demo/api";

export default function App() {
  const [actresses, getActresses] = useState([]);

  const fetchActresses = () => {
    axios.get(apiURL + "/actresses/").then((res) => {
      getActresses(res.data);
    });
  };

  useEffect(fetchActresses, []);

  console.log(actresses);

  return (
    <>
      <h1>Vite + React</h1>
    </>
  );
}
