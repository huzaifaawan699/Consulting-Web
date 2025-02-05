import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Service from './Components/Service';
import Team from './Components/Team';
import Pricing from './Components/Pricing';
import FAQ from './Components/FAQ';
import Blog from './Components/Blog';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import Stats from './Components/Stats';
import Quotes from './Components/Quotes';


function App() {


  return (
    <>
      <Navbar/>
      <Home/>
      <Service/>
      <Team/>
      <Quotes/>
      <Pricing/>
      <Stats/>
      <Blog/> 
      <Contact/>
      <FAQ/>
      <Footer/>
     
    </>
  );
}

export default App;
