import styles from './Home.scss'
import img from '../../images/page1-001.png'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import actions from '../actions/index'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                { link: 'echarts', title: 'echartsdemo' },
                { link: 'collapse', title: '折叠面板' },
                { link: 'refsAnddom', title: 'refs和dom' },
                { link: 'show', title: '滑动进度条练习' },
                { link: 'menuList', title: '菜单列表练习' }
            ]
        }
    }

    componentWillMount() {
        const { setHeader } = this.props;
        setHeader({ title: '首页', back: false, home: false })
        // console.log(setHeader);
        // fetch(__APIROOT__+'/test')
        // .then((res)=>{
        //     //console.log(res);
        // })
    }


    render() {
        const { list } = this.state;
        return (
            <div className={styles.contain}>
                <ul className={styles.ul}>
                    {
                        list.map((v, k) =>
                            <Link key={v.link.toString()} to={v.link}>
                                <li className={styles.list}>{v.title}</li>
                            </Link>
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default connect(null, {
    setHeader: actions.header.setHeader
})(Home)