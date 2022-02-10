import './App.css';
import { Route, Routes } from "react-router";
import { BrowserRouter as Router, Outlet, Navigate } from "react-router-dom";
import Recipe from './Recipe';
import Ingredients from './Ingredients';
function App() {
  return <>
    <Router>
      <Routes>
        <Route exact path='/ingredients' element={<Ingredients />} />
        <Route path="/" element={<Recipe />} />
      </Routes>
    </Router>
  </>
}

export default App;
