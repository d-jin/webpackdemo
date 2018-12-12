import React from 'react'
import { connect } from 'react-redux'
import actions from '../actions/index'
import PiechartTel from './Piechart'
import LineGradientTel from './LineGradient'
import RadarTel from './Radar'
import styles from './Echarts.scss'


class Echarts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [{ color: '#f34141', title: '直接' },
            { color: '#ff8e01', title: '邮件营销' },
            { color: '#4cbc00', title: '联盟' },
            { color: '#4ccad8', title: '视频&广告' },
            { color: '#f2ea01', title: '搜索引擎访问' }]
        }
    }

    componentWillMount() {
        const { setHeader } = this.props;
        setHeader({ title: 'echartsdemo', back: 'true', home: 'true' })

    }


    render() {
        let { list } = this.state;
        return (
            <div className={styles.contain}>
                 {/* 环形图 */}
                <div className={styles.piebox} >
                    <div>
                        <PiechartTel
                            style={{ height: '100px', padding: '20px' }}
                        />
                    </div>
                    <div className={styles.rightTxt}>
                        <ul>
                            {
                                list && list.map(v =>
                                    <li className={styles.list}>
                                        <span className={styles.clr} style={{ background: v.color }}></span>
                                        <span className={styles.txt}>{v.title}</span>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </div>

                {/* 折线图 */}
                <div className={styles.lineGradient}>
                    <LineGradientTel />
                </div>

                {/* 雷达图 */}
                <div className={styles.Radar}>
                    <RadarTel  />
                </div>

            </div>

        )
    }
}

export default connect(null, {
    setHeader: actions.header.setHeader
})(Echarts);