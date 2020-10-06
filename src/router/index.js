import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../utils/history';
import Header from '../containers/header';
import Home from '../containers/home';
import Features from '../containers/features';
import Pricing from '../containers/pricing';
import Faqs from '../containers/faqs';
import Blog from '../containers/blog';
import Contacts from '../containers/contacts';
import Footer from '../containers/footer';


export default class MainRouter extends Component {

    render() {
        return ( 
            <Router history={history}>
              <Header/>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/features" component={Features} />
                    <Route path="/pricing" component={Pricing} />
                    <Route path="/faqs" component={Faqs} /> 
                    <Route path="/blog" component={Blog} /> 
                    <Route path="/contacts" component={Contacts} />                    
                </Switch>
                <Footer />                
            </Router> 
        );
    }
}