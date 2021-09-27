import './styles/App.css';
import {Route, Switch} from "react-router-dom";
import News from "./components/pages/news/News";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/navbar/Header";
import React, {useState} from "react";
import Auth from "./components/Auth";
import Posts from "./components/pages/posts/Posts";


function App() {


    return (
        <div className="container">
            <div className='app'>


                <Header/>
                <Navbar/>

                <div>
                    <Switch>
                        <Route path='/auth' component={Auth}/>
                        <Route path='/posts' component={Posts}/>
                        <Route path='/news' component={News}/>

                    </Switch>
                </div>
            </div>
        </div>
    );
}

export default App;
