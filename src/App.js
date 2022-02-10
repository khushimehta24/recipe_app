import './App.css';
import { Route, Routes } from "react-router";
import { BrowserRouter as Router, Outlet, Navigate } from "react-router-dom";
import Recipe from './Recipe';
import Ingredients from './Ingredients';
import Navbar from './Navbar';
import Home from './Home'

function App() {
  return <>
    <Navbar />
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/ingredients' element={<Ingredients />} />
        <Route exact path="/search" element={<Recipe />} />
      </Routes>
    </Router>
  </>
}

export default App;
