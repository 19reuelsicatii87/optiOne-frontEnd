import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import Home from './Pages/Home';

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
          {/* <Route path="/dashboard/login">
            <Login />
          </Route> */}

          {/* Unprotected and root Routes */}
          {/* ============================*/}
          <Route path='/' element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
