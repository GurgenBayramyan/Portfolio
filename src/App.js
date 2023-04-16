import "./style/main.css";
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Project from './Pages/Project';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import Home from './Pages/Home';
import ScrolToTop from './ScrolToTop';



function App() {

return (
<div className='App'>
    <Router>
    <ScrolToTop />
    <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/project/:id' element={<Project />} />
          <Route path='projects' element={<Projects />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
        <Footer />
        
    </Router>
</div>
  );
}

export default App;
