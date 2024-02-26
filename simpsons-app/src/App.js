import './App.css';
import SearchBar from './components/searchBar/SearchBar';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import NotFound from '../src/components/NotFound/NotFound.js';

function App() {
  return (
    <Router>
      <div className="App">      
      <Routes>
        <Route path="/notfound/" element={<NotFound/>}></Route>
        <Route path="/" element={<SearchBar/>}></Route>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
