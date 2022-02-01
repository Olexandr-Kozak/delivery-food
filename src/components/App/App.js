import './style.css';
import Header from "../Header";
import HomePage from "../HomePage";
import Footer from "../Footer";
import { Routes, Route } from "react-router-dom";
import React from "react";
import ProductPage from "../ProductPage";


function App(props) {

  console.log(props)

  return (
    <div className="App">
      <main className='main'>
        <div className="container">
          <Header/>
          <Routes>

            <Route path="/" element={<HomePage/>}/>
            <Route path="/restaurant/:products" element={<ProductPage/>}/>

          </Routes>
          <Footer/>
        </div>
      </main>
    </div>
  );
}

export default App;
