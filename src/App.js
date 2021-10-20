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
import {BrowserRouter as Router} from "react-router-dom";
import MainRouter from "./MainRouter";

function App() {
  return (
    <>
      <Router>
        <MainRouter/>
      </Router>
    </>
  );
}

export default App;
