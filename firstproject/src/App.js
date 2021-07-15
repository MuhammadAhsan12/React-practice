import React from 'react';
import { Header } from "./components/Header";
import Headerclas from "./components/Headerclas";
import HideShow from "./components/HideShow";
import ComponentdidUpdate from "./components/ComponentdidUpdate";
import ComponentWillUnmount from "./components/ComponentWillUnmount";
import StateAndLifeCycleInFunction from "./components/StateAndLifeCycleInFunction";
import Forms from "./components/Forms";
import FormInvalid from "./components/FormInvalid";
import Listing from "./components/Listing";
import { Stylecs } from "./components/Stylecs";
import Home from "./components/routers/Home";
import About from "./components/routers/About";
import Form from "./components/routers/Form";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Api from "./components/Api";
import Portal from "./components/Portal"
import Ref from "./components/Ref";
import Button from "./components/Bootstrap/Button"
import HeaderH from "./components/Bootstrap/Headerh"
import Model from "./components/Model"
import { Suspense } from 'react';
import { lazy } from 'react';
import UploadFile from "./components/UploadFile";
const Lazyload = lazy(() => import('./components/Lazyload'));

function App() {

  return (
    <div>
      < HeaderH />

      <Router>
        <Link style={{ color: "red", marginLeft: "20px" }} to="">home</Link>
        <Link style={{ color: "red", marginLeft: "20px" }} to="/Form">form</Link>
        <Link style={{ color: "red", marginLeft: "20px" }} to="/About">about</Link>

        <Route exact path="/" component={Home} />
        <Route exact path="/Form" component={Form} />
        <Route exact path="/About" component={About} />
      </Router>

      < Header text="Muhammad Ahsan" data={{ name: 'MA' }} />  
      < UploadFile />
      < Headerclas />
      < HideShow />
      < ComponentdidUpdate />
      < ComponentWillUnmount />
      < StateAndLifeCycleInFunction />
      < Forms />
      < FormInvalid />
      < Listing />
      < Stylecs data="apply" />
      < Api />
      < Portal />
      < Ref />
      < Button />
      < Model />
      <Suspense fallback={<div>please wait...........</div>}>
        < Lazyload />
      </Suspense>
    </div>
  );
}

export default App;
