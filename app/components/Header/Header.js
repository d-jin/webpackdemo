import React, { Component } from 'react'
import styles from './Header.scss'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class Header extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.back = this.back.bind(this);
        this.goHome = this.goHome.bind(this);

    }

    //返回按钮
    back() {
        this.props.history.go(-1);
    }
    
    //回到主页
    goHome(){
        this.props.history.replace('/');
    }

    render() {
        const { header } = this.props;
        return (
            <div className={styles.contain} >
                <div className={styles.wrap}>
                <div className={styles.head}>
                    <div className={styles.title}>{header.title}</div>
                    {
                        header.back ? <i className={styles.leftIcon} onClick={this.back}></i> : null
                    }
                    {
                        header.home ? <i className={styles.rightIcon} onClick={this.goHome}></i> : null
                    }
                </div>
                </div>
                
            </div>
        )
    }
}
export default withRouter(connect((state) => ({
    header: state.header
}))(Header))