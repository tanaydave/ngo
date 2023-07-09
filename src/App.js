
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
          <Route path="/ngo" element= {<Home />} />
          <Route path="/ngo/causes" element= {<Causes />} />
          <Route path="/ngo/contact" element= {<Contact />} />
          <Route path="/ngo/events" element= {<Events />} />
          <Route path="/ngo/blogs" element= {<Blogs />} />
          <Route path="/ngo/about" element= {<About />} />
          <Route path="/ngo/donations" element= {<Donations />} />
          <Route path="/ngo/news" element= {<News />} />
          <Route path="/ngo/gallery" element= {<Gallery />} />






        </Routes>
      </Router>
       
    </div>
  );
}

export default App;
