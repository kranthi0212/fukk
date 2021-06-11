import ind from "./india.jpg";

import "./App.css";
import { useEffect,useState } from "react";


function App() {
  const [data, setdata] = useState([])
  const getCoviddata = async () => {
    const data = await fetch("https://api.covid19india.org/data.json");
    const Adata = await data.json();
    setdata(Adata.statewise[0]);
  };

  useEffect(() => {
    getCoviddata();
  }, []);
  return (
    <>
      <div className="head">
        <h1>INDIA COVID NUMBERS</h1>
      </div>
      <div className="everything">
      <div className="wrapper">
          <div className="card">
            <p className="petu">COUNTRY DETAILS</p>
            <div className="info">
              <h1>COUNTRY</h1>
              <p>
               india
              </p>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <div className="card">
            <p className="petu">RECOVERED DETAILS</p>
            <div className="info">
              <h1>RECOVERED</h1>
              <p>
                {data.recovered}
              </p>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <div className="card">
            <p className="petu">CONFORME DETAILS</p>
            <div className="info">
              <h1>CONFORMED</h1>
              <p>
              {data.confirmed}
              </p>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <div className="card">
            <p className="petu">DEATH DETAIL</p>
            <div className="info">
              <h1>DEATH</h1>
              <p>
              {data.deaths}
              </p>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <div className="card">
            <p className="petu">ACTIVE DETAIL</p>
            <div className="info">
              <h1>ACTIVE</h1>
              <p>
              {data.active}
              </p>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <div className="card">
            <p className="petu">LAST UPDATE</p>
            <div className="info">
              <h1>LAST UPDATE</h1>
              <p>
              {data.lastupdatedtime}
              </p>
            </div>
          </div>
        </div>

        </div>


    </>
  );
}

export default App;
