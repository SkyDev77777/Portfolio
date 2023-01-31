import { React, useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Contact from "./components/Contact";

function App() {
  const readtoken = "dab8a75bf8866ce346a59c05a9cf3e224c692b46 ";
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      axios
        .get(
          `https://api.buttercms.com/v2/pages/portfolio/portfolio?auth_token=${readtoken}`
        )
        .then((res) => {
          setData(res.data.data.fields.my_personal_portfolio);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
  }, []);
  return (
    <div>
      <Navbar />
      <Home content={data[0]} />
      <About content={data[1]} />
      <Skills content={data[2]} />
      <Works content={data[3]} />
      <Contact />
    </div>
  );
}

export default App;
