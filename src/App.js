import React from 'react';
//import logo from './logo.svg';
import './App.css';

import Nav from './components/nav';
import Banner from './components/banner';
import Footer from './components/footer';
import Table from './components/table';

function App() {
  return (
    <div>
    <Nav />
      <Banner />
      <Table/>
      <Footer/>
   
    </div>
  )

  
}
export default App;