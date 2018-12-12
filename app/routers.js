import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home/Home'
import Echarts from './components/Echarts/Echarts'
import Collapse from './components/Collapse/Collapse'
import Header from './components/Header/Header'
import RefsAndDom from './components/RefsAndDom/RefsAndDom'
import Show from './components/Show/Show'
import MenuList from './components/MenuList/MenuList'

const RouteConfig = () => (
    <Router>
        <React.Fragment>
            <Header />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/echarts' component={Echarts} />
                <Route path='/collapse' component={Collapse} />
                <Route path='/refsAndDom' component={RefsAndDom} />
                <Route  path='/show' component={Show} />
                <Route  path='/menuList' component={MenuList} />
            </Switch>
        </React.Fragment>

    </Router>
)
export default RouteConfig