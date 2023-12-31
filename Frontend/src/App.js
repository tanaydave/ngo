
import './App.css'
import {BrowserRouter as Router , Routes , Route , Link} from 'react-router-dom';
import {lazy,Suspense} from "react"
import Loading from './components/Loading';
import Test from './pages/Test';
const  SingleCause = lazy(()=> import('./components/SingleCause')) ;

const Home = lazy(()=>import ('./pages/Home'))
const Contact = lazy(()=>import( './pages/Contact'))
const Causes = lazy(()=>import( './pages/Causes'));
const Events = lazy(()=>import( './pages/EventsOur'));
const Blogs = lazy(()=>import( './pages/BlogsOur'));
// const About = lazy(()=>import( './pages/AboutUs'));
const Donations = lazy(()=>import( './pages/Donations'));
const News = lazy(()=>import( "./pages/News"));
const Gallery = lazy(()=>import( "./pages/Gallery"));
const AboutOF = lazy(()=>import( "./pages/AboutOF"));
const Purpose = lazy(()=>import( "./pages/Purpose"));
const BecomeAVounteer = lazy(()=>import( "./pages/BecomeAVolunteer"));
const Approvals = lazy(()=>import( "./pages/Approvals"));








function App() {
  
  return (
    <div className="App ">
      {/* <Home /> */}
      <Router>
        <Suspense fallback={<Loading/>} >
        <Routes>
          
          <Route path="/" element= {<Home />} />
          <Route path="/Home" element= {<Home />} />

          <Route path="/Causes" element= {<Causes />} />
          <Route path="/Contact" element= {<Contact />} />
          <Route path="/Events" element= {<Events />} />
          <Route path="/Blogs" element= {<Blogs />} />
          <Route path="/Purpose" element= {<Purpose />} />
          <Route path="/Donations" element= {<Donations />} />
          <Route path="/NewsRoom" element= {<News />} />
          <Route path="/Gallery" element= {<Gallery />} />
          <Route path="/AboutOF" element= {<AboutOF />} />
          <Route path="/Causes/SingleCause" element= {<SingleCause />} />
          <Route path="/Volunteer" element= {<BecomeAVounteer />} />
          <Route path="/Approvals" element= {<Approvals />} />
          <Route path="/Test" element={<Test/>}/>




        </Routes>
        </Suspense>

      </Router>
      
    </div>
  );
}

export default App;
