
import './App.css';
import {BrowserRouter as Router , Routes , Route , Link} from 'react-router-dom';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <Home />
      {/* <Router>
      
        <Routes>
          <Route path="/" element= {<Home/>} />
        </Routes>
      </Router> */}
       
    </div>
  );
}

export default App;
