import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header";
import About from "./Components/About";
import Starter from "./Components/Starter";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Portolio from "./Components/Portolio";
import Education from "./Components/Education";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Header/>
        <div className="container">
          <Starter/>
          <div className="wrapper">
            <About/>
            <Skills/>
            <Experience/>
            <Education/>
            <Portolio/>
            <Contact/>
            <Footer/>
          </div>
        </div>

    </>
  );
}

export default App;
