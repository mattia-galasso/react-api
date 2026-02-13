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

  return (
    <>
      <div className="container my-3">
        <header className="p-3 bg-danger bg-opacity-10 border border-danger border-start-0 border-end-0 w-100">
          <h1 className="text-center ">Actresses</h1>
        </header>
        <main className="my-4">
          <div className="actress-box">
            {actresses.map((actress) => (
              <div className="card actCard">
                <div className="card-body">
                  <h5 className="card-title p-2">{actress.name}</h5>
                  <ul className="list-group">
                    <li className="list-group-item">
                      <small className="text-body-secondary">
                        Anno di nascita:{" "}
                      </small>
                      <p className="m-0 p-1">{actress.birth_year}</p>
                    </li>
                    <li className="list-group-item">
                      <small className="text-body-secondary">
                        Nazionalità:{" "}
                      </small>
                      <p className="m-0 p-1">{actress.nationality}</p>
                    </li>
                    <li className="list-group-item">
                      <small className="text-body-secondary">Biografia: </small>
                      <p className="m-0 p-1">{actress.biography}</p>
                    </li>
                    <li className="list-group-item">
                      <small className="text-body-secondary">
                        Riconoscimenti:{" "}
                      </small>
                      <p className="m-0 p-1">{actress.awards}</p>
                    </li>
                    <li className="list-group-item text-center p-2">
                      <img
                        src={actress.image}
                        className="card-img-bottom w-50"
                        alt={actress.name}
                      />
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
