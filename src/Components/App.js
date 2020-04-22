import React from 'react';
import './App.css';
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import MerchControl from "./MerchControl";

function App() {
  return (
    <React.Fragment>
      <Header />
      <hr/>
      <MerchControl />
      <hr/>
      <Footer />
    </React.Fragment>
    );
}

export default App;