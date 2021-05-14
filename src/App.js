import React, { useEffect, useState } from "react";

const App = () => {

  const [data , setData] = useState([])

  const getCovidData = async () => {
    try {
      const res = await fetch("https://api.covid19india.org/data.json");

      const realData = await res.json();
      console.log(realData.statewise[0]);
      setData(realData.statewise[0])
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="text-center my-5">COVID-19/COVID-TRACKER</h1>
        <div className="row">
          <div className="col-md-4 mb-5">
            <div class="card">
              <div class="card-body bg-secondary">
                <h5 class="card-title text-center">OUR COUNTRY</h5>
                <h1 class="card-text text-center">INDIA </h1>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div class="card">
              <div class="card-body bg-primary">
                <h5 class="card-title text-center">TOTAL CONFIRMED</h5>
                <h1 class="card-text text-center">{data.confirmed}</h1>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div class="card">
              <div class="card-body bg-danger">
                <h5 class="card-title text-center">TOTAL DEATH</h5>
                <h1 class="card-text text-center">{data.deaths}</h1>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div class="card">
              <div class="card-body bg-warning">
                <h5 class="card-title text-center">TOTAL ACTIVE</h5>
                <h1 class="card-text text-center">{data.active}</h1>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div class="card">
              <div class="card-body bg-success">
                <h5 class="card-title text-center">TOTAL RECOVERED</h5>
                <h1 class="card-text text-center">{data.recovered} </h1>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div class="card">
              <div class="card-body bg-info">
                <h5 class="card-title text-center">LAST UPDATED</h5>
                <h1 class="card-text text-center">{data.lastupdatedtime} </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
