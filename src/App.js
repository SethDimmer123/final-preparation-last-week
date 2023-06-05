// installed 06:04 npm add react-router-dom@6
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';//imported function component
import Posts  from './pages/Posts'; //imported function component
function App() {
  return (// i wrap my entire app IN MY BrowserRouter
  // ONLY WRAP MY Routes in a Route
  //element= is my home component
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={ <Home />}></Route>{/**home route "/" */}
          <Route path=':id' element={<Posts />}></Route>{
          /**dynamic route is the parent of the home 
           * /:id
          */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
