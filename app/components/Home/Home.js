import './Home.scss'
import img from '../../images/page1-001.png'
import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import actions from '../actions/index'

class Home extends Component {
    constructor(props){
        super(props);
    }

componentWillMount() {
    const { setHeader } = this.props;
    setHeader({ title: '买1买2买3' })
    console.log(setHeader);
    // fetch(__APIROOT__+'/test')
    // .then((res)=>{
    //     //console.log(res);
    // })
}

    render(){
        return(
            <div>
                <ul>
                    <Link to='about'><li>about</li></Link>
                    <Link to='suggest'><li>suggest</li></Link>
                    <Link to='detail'><li>detail</li></Link>
                    <Link to='show'><li>show</li></Link>
                </ul>
            </div>
        )
    }
}

export default connect (null,{
    setHeader:actions.header.setHeader
})(Home)