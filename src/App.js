import React from "react"
import { Routes, Route } from "react-router-dom"

import Parse from 'parse/dist/parse.min.js';
import Cadastro from "./pages/Cadastro"
import Login from "./pages/Login"
import TelaInicial from "./pages/TelaInicial"

// Your Parse initialization configuration goes here
const PARSE_APPLICATION_ID = 'VloLGxgUQYCHu9iy9tEmca8ztBrsY9PhyEYhfAP7';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = 'HuS0NUkh7Ws23tipx2maWQ2ok4hvhUFGEmOM2TKm';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;


function App() {
  return (
    <Routes>
      <Route path="/" element={<TelaInicial />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;