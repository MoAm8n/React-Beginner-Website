import React from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Header from "../common/header/Header"
import Footer from "../common/footer/Footer"
import Home from "../home/Home"
import About from "../about/About";
import Services from "../services/Services";
import Blog from "../blog/Blog";
import Pricing from "../PagePrice/Pricing";
import Contact from "../contact/Contact";
const Pages = () => {
  return (
        <Router>
            <Header/>
          <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/About' component={About}/>
              <Route exact path='/Services' component={Services}/>
              <Route exact path='/Blog' component={Blog}/>
              <Route exact path='/Pricing' component={Pricing}/>
              <Route exact path='/Contact' component={Contact}/>
          </Switch>
          <Footer/>
        </Router>
  )
}
export default Pages