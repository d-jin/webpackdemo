import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Suggest from './components/Suggest/Suggest'
import Header from './components/Header/Header'
// import Detail from './components/Detail/Detail'
// const Home = () => import('./components/Home/Home')

const RouteConfig = () => (
    <Router>
        <React.Fragment>
            <Header />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/suggest' component={Suggest} />
                {/* <Route path='/head' component={Head} /> */}
                {/* <Route  path='/detail' component={Detail} /> */}
            </Switch>
        </React.Fragment>

    </Router>
)
export default RouteConfig