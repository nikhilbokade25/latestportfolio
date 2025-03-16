
import './App.css';
import Collab from './Components/Collab';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Projects from './Components/Projects';


function App() {
  return (
    <div className="App">
        <Hero/>
        <Projects />
        <Collab/>
        <Footer/>
    </div>
  );
}

export default App;
