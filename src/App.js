
import './App.css';
import {BrowserRouter as Router , Routes , Route , Link} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact'
import Services from './pages/ServicesProvided';
import Events from './pages/EventsOur';
import Blogs from './pages/BlogsOur';
import About from './pages/AboutUs'






function App() {
  return (
    <div className="App ">
      {/* <Home /> */}
      <Router>
      
        <Routes>
          <Route path="/ngo/" element= {<Home />} />
          <Route path="/ngo/services" element= {<Services />} />
          <Route path="/ngo/contact" element= {<Contact />} />
          <Route path="/ngo/events" element= {<Events />} />
          <Route path="/ngo/blogs" element= {<Blogs />} />
          <Route path="/ngo/about" element= {<About />} />



        </Routes>
      </Router>
       
    </div>
  );
}

export default App;
