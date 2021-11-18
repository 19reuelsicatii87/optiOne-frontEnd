import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Memership from './Pages/Memership';
import OnlineBusinessPresentation from './Pages/OnlineBusinessPresentation';

function App() {
  return (
    <div className="App">
      <Router>

        {/* A <Switch> looks through its children <Route>s and
    renders the first one that matches the current URL. */}
        <Routes>

          {/* Protected Routes */}
          {/* ============================*/}
          {/* <Route path="/dashboard/addProduct">
            <Protected cmp={AddProduct} />
          </Route> */}
          

          {/* Unprotected Routes */}
          {/* ============================*/}
          <Route path='/products' element={<Products/>} />
          <Route path='/membership' element={<Memership/>} />
          <Route path='/membership/online-business-presentation' element={<OnlineBusinessPresentation/>} />

          {/* Unprotected and root Routes */}
          {/* ============================*/}
          <Route path='/' element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
