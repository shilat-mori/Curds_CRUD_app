// import logo from "./logo.svg";
import "./App.css";
import "./styles/style.css";
import "./styles/bootstrap.min.css";
import axios from "axios";
import ColorCanvas from "./components/ColorCanvas";
import { useEffect, useState } from "react";

function App() {
  const [color_curds, setColorCurds] = useState([]);
  const [err_message, setErrMsg] = useState("");
  const [colors, setColors] = useState([]);
  useEffect(() => {
    getColors();
    getCurds();
  }, []);


  const getColors = async () => {
    axios.get("http://localhost:5000/getColors").then((res) => {
      const colorsData = res.data;
      setColors(colorsData);
      console.log(colorsData);
    });
  };

  const getCurds = async () => {
    axios.get("http://localhost:5000/getAll").then((res) => {
      const colorData = res.data;
      setColorCurds(colorData);
      console.log(color_curds);
      console.log(colorData);
    });
  };

  const createCurd = async (color) => {
    axios
      .post("http://localhost:5000/addColor", color)
      .then((res) => {
        getCurds();
      })
      .catch((err) => {
        setErrMsg(err.message);
        console.log(err_message);
      });
  };

  const deleteCurd = async (id) => {
    console.log("delete:", id);
    axios.delete(`http://localhost:5000/deleteColor/${id}`).then((res) => {
      getCurds();
    });
  };

  const updateCurd = async (curd) =>{
    axios.put("http://localhost:5000/updateColor", curd).then((res)=>{
      getCurds();
    })
  }

  return (
    <div className="App">
      <ColorCanvas
        color_curds={color_curds}
        err_message={err_message}
        createColor={createCurd}
        deleteColor={deleteCurd}
        updateColor={updateCurd}
        colors={colors}
      />
    </div>
  );
}

export default App;
