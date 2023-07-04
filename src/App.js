
import './App.css';
import {BrowserRouter as Router , Routes , Route , Link} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact'
import Goals from './pages/Goals';
import Events from './pages/EventsOur';
import Blogs from './pages/BlogsOur';
import About from './pages/AboutUs'
import Donations from './pages/Donations';


function App() {
  return (
    <div className="App ">
      {/* <Home /> */}
      <Router>
      
        <Routes>
          <Route path="/ngo" element= {<Home />} />
          <Route path="/ngo/goals" element= {<Goals />} />
          <Route path="/ngo/contact" element= {<Contact />} />
          <Route path="/ngo/events" element= {<Events />} />
          <Route path="/ngo/blogs" element= {<Blogs />} />
          <Route path="/ngo/about" element= {<About />} />
          <Route path="/ngo/donations" element= {<Donations />} />




        </Routes>
      </Router>
       
    </div>
  );
}

export default App;
