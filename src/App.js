import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Memership from './Pages/Memership';
import OnlineBusinessPresentation from './Pages/OnlineBusinessPresentation';
import FormPackage from './Pages/FormPackage';
import FormOrder from './Pages/FormOrder';
import PaymentOrder from './Pages/Payment';
import SummaryOrder from './Pages/Summary';
import ContactUs from './Pages/ContactUs';
import BlogOverview from './Pages/BlogOverview';
import BlogContentPrepReco from './Pages/BlogContentPrepReco';
import BlogContentBenefits from './Pages/BlogContentBenefits';
import BlogContentPsoriasis from './Pages/BlogContentPsoriasis';
import BlogContentGlandCancer from './Pages/BlogContentGlandCancer';
import NotFound from './Pages/NotFound';
import DRegistration from './Pages/DRegistration';


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


          {/* Unprotected Routes - Business Page*/}
          {/* ============================*/}
          <Route path='/products' element={<Products />} />
          <Route path='/membership' element={<Memership />} />
          <Route path='/membership/online-business-presentation' element={<OnlineBusinessPresentation />} />
          <Route path='/order/packageform' element={<FormPackage />} />
          <Route path='/order/productform' element={<FormOrder />} />      
          <Route path='/order/payment/:order_code' element={<PaymentOrder />} />      
          <Route path='/order/summary/:order_code' element={<SummaryOrder />} />             
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/blogs' element={<BlogOverview />} />
          <Route path='/blogs/preperation-and-recommendation' element={<BlogContentPrepReco />} />
          <Route path='/blogs/health-and-benefits' element={<BlogContentBenefits />} />
          <Route path='/blogs/gland-cancer' element={<BlogContentGlandCancer />} />
          <Route path='/blogs/psoriasis' element={<BlogContentPsoriasis />} />

          {/* Unprotected Routes - Dashboard Page*/}
          {/* ============================*/}
          <Route path='/dashboard/registation' element={<DRegistration />} />

          {/* Unprotected and root Routes */}
          {/* ============================*/}
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
