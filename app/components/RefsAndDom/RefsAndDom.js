import React from 'react'
// import styles from './RefsAndDom.scss'
import { connect } from 'react-redux'
import actions from '../actions/index'

class RefsAndDom extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            
        }
    }

    componentWillMount() {
        const { setHeader } = this.props;
        setHeader({ title: 'refs和dom', back:true,home:true})
    }


    render() {
        return (
            <div>
               <input type="text" placeholder='搜索' />
            </div>
        )
    }
}

export default connect (null,{
    setHeader:actions.header.setHeader
})(RefsAndDom);