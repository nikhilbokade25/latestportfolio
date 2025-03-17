// import './App.css';
// import Collab from './Components/Collab';
// import Footer from './Components/Footer';
// import Hero from './Components/Hero';
// import Projects from './Components/Projects';
// import About from './Components/About';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// function App() {
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" element={
//                     <>
//                         <Hero />
//                         <Projects />
//                         <Collab />
//                         <Footer />
//                     </>
//                 } />
//                 <Route path="/about" element={<About />} />
//             </Routes>
//         </Router>
//     );
// }

// export default App;


import './App.css';
import Collab from './Components/Collab';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Projects from './Components/Projects';
import About from './Components/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Router basename="/latestportfolio"> 
            <Routes>
                <Route path="/" element={
                    <>
                        <Hero />
                        <Projects />
                        <Collab />
                        <Footer />
                    </>
                } />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
}

export default App;