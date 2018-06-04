import React from 'react'
import { connect } from 'react-redux'
import actions from '../actions/index'


class About extends React.Component {
    constructor(props){
        super(props);
    }

componentWillMount() {
    const { setHeader } = this.props;
    setHeader({ title: '买买买' })
}

    render(){
        return(
            <div>
               this is about
            </div>
        )
    }
}

export default connect (null,{
    setHeader:actions.header.setHeader
})(About);