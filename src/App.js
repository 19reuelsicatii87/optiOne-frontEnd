import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Memership from './Pages/Memership';
import OnlineBusinessPresentation from './Pages/OnlineBusinessPresentation';
import BlogOverview from './Pages/BlogOverview';
import BlogContentPrepReco from './Pages/BlogContentPrepReco';
import BlogContentBenefits from './Pages/BlogContentBenefits';
import BlogContentPsoriasis from './Pages/BlogContentPsoriasis';
import BlogContentGlandCancer from './Pages/BlogContentGlandCancer';


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
          <Route path='/blogs' element={<BlogOverview/>} />
          <Route path='/blogs/preperation-and-recommendation' element={<BlogContentPrepReco/>} />
          <Route path='/blogs/health-and-benefits' element={<BlogContentBenefits/>} />
          <Route path='/blogs/gland-cancer' element={<BlogContentGlandCancer/>} />
          <Route path='/blogs/psoriasis' element={<BlogContentPsoriasis/>} />

          {/* Unprotected and root Routes */}
          {/* ============================*/}
          <Route path='/' element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
