import React from 'react';
import Header from './components/Header';
import WhyUs from './components/WhyUs';
import Products from './components/Products';
import Experiences from './components/Experiences'; 
import Materials from './components/Materials'; 
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <Header />
      <WhyUs /> 
      <Products />
      <Experiences /> 
      <Materials />
      <Testimonials />
      <Footer />
      
    </div>
  );
}

export default App;