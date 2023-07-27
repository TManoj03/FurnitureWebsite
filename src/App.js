import './App.css';
import Nav from './Components/Nav/Nav'
import Hero from './Components/Hero/Hero'
import Products from './Components/Products/Products';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';
import About from './Components/AboutUs/About'
import Reviews from './Components/Reviews/Reviews';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <About />
      <Products />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
