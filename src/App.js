
import './App.css';
import {BrowserRouter as Router , Routes , Route , Link} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact'
import Causes from './pages/Causes';
import Events from './pages/EventsOur';
import Blogs from './pages/BlogsOur';
import About from './pages/AboutUs'
import Donations from './pages/Donations';
import News from "./pages/News"
import Gallery from "./pages/Gallery"



function App() {
  return (
    <div className="App ">
      {/* <Home /> */}
      <Router>
      
        <Routes>
          
          <Route path="/" element= {<Home />} />
          <Route path="/causes" element= {<Causes />} />
          <Route path="/contact" element= {<Contact />} />
          <Route path="/events" element= {<Events />} />
          <Route path="/blogs" element= {<Blogs />} />
          <Route path="/about" element= {<About />} />
          <Route path="/donations" element= {<Donations />} />
          <Route path="/news" element= {<News />} />
          <Route path="/gallery" element= {<Gallery />} />






        </Routes>
      </Router>
       
    </div>
  );
}

export default App;
