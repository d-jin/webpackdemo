import React from 'react'
import styles from './Show.scss'
import { connect } from 'react-redux'
import actions from '../actions/index'

class Show extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0
        }
    }

    componentWillMount() {
        const { setHeader } = this.props;
        setHeader({ title: '滑动进度条练习', back: true, home: true })
        this.getLocation();


    }

    componentDidMount() {
        this.sliding();

    }

    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition, this.showError);
        } else {
            alert("浏览器不支持地理定位。");
        }
    }

    showError(error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                alert("定位失败,用户拒绝请求地理定位");
                break;
            case error.POSITION_UNAVAILABLE:
                alert("定位失败,位置信息是不可用");
                break;
            case error.TIMEOUT:
                alert("定位失败,请求获取用户位置超时");
                break;
            case error.UNKNOWN_ERROR:
                alert("定位失败,定位系统失效");
                break;
        }
    }

     showPosition(position) {
        lat = position.coords.latitude; //纬度 
        lag = position.coords.longitude; //经度 
        alert('纬度:' + lat + ',经度:' + lag);

    }

    sliding() {
        let that = this
        document.getElementsByTagName('body')[0].addEventListener('mousewheel', function (e) {
            let top = document.documentElement.scrollTop; //滚动条距离顶部的高度
            let clientHeight = document.documentElement.clientHeight || document.body.clientHeight; //窗口可视高度
            let height = document.body.scrollHeight; //页面的实际高度
            let width = top / (height - clientHeight + 14) * 100 + '%';
            that.setState({ width: width })
        })
    }


    render() {
        let { width } = this.state;
        return (
            <div className={styles.contain}>
                <div className={styles.line} style={{ width: width }}></div>
                <h4 style={{ textAlign: 'center' }}>js或jq获取当前屏幕的各种高度</h4>
                <p style={{ color: '#ff8e01', fontSize: '18px' }}>js</p>
                <p>网页可见区域宽：<span>document.body.clientWidth</span></p>
                <p>网页可见区域高：<span>document.body.clientHeight</span></p>
                <p>网页可见区域宽：<span>document.body.offsetWidth (包括边线的宽)</span></p>
                <p>网页可见区域高：<span>document.body.offsetHeight (包括边线的高)</span></p>
                <p>网页正文全文宽：<span>document.body.scrollWidth</span></p>
                <p>网页正文全文高：<span>document.body.scrollHeight</span></p>
                <p>网页被卷去的高：<span>document.body.scrollTop</span></p>
                <p>网页被卷去的左：<span>document.body.scrollLeft</span></p>
                <p>网页正文部分上：<span>window.screenTop</span></p>
                <p>网页正文部分左：<span>window.screenLeft</span></p>
                <p>屏幕分辨率的高：<span>window.screen.height</span></p>
                <p>屏幕分辨率的宽：<span>window.screen.width</span></p>
                <p>屏幕可用工作区高度：<span>window.screen.availHeight</span></p>
                <p>屏幕可用工作区宽度：<span>window.screen.availWidth</span></p>

                <p style={{ color: '#ff8e01', fontSize: '18px' }}>jq</p>
                <p>浏览器当前窗口文档的高度: <span>$(document).height();</span></p>
                <p>浏览器当前窗口可视区域高度: <span>$(window).height();</span> </p>
                <p>浏览器当前窗口文档body的高度: <span>$(document.body).height();</span></p>
                <p>浏览器当前窗口文档body的总高度: <span>$(document.body).outerHeight(true)(包括border padding margin);</span></p>
                <p>浏览器当前窗口可视区域宽度: <span>$(window).width();</span></p>
                <p>浏览器当前窗口文档对象宽度: <span>$(document).width();</span></p>
                <p>浏览器当前窗口文档body的宽度: <span>$(document.body).width();</span></p>
                <p>浏览器当前窗口文档body的总宽度: <span>$(document.body).outerWidth(true);(包括border padding margin);</span></p>
            </div>
        )
    }
}

export default connect(null, {
    setHeader: actions.header.setHeader
})(Show);