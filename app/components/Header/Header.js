import React, {Component} from 'react'
import styles from './Header.scss'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
console.log(styles)

class Header extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {

    }

    render() {
        const { header } = this.props;
        console.log(header)
        // console.log(header && header.title);
        return (
            <div className={styles.contain} >
                <div className={styles.head}>
                    <i className={styles.leftIcon}></i>
                    <div className={styles.title}>{header.title}</div>
                    <i className={styles.rightIcon}></i>
                </div>
            </div>
        )
    }
}
export default withRouter(connect((state) => ({
    header: state.header
}))(Header))