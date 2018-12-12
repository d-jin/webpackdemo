import React from 'react'
import { connect } from 'react-redux'
import actions from '../actions/index'
import ReactEcharts from 'echarts-for-react'



class Radar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}

    }

    componentWillMount() {
        // const { setHeader } = this.props;
    }
    getRadar() {
        const option = {
            title: {
                text: '雷达图',
                left: 'left'
            },
            radar:

            {
                indicator: [
                    { text: '语文', max: 150 },
                    { text: '数学', max: 150 },
                    { text: '英语', max: 150 },
                    { text: '物理', max: 120 },
                    { text: '化学', max: 108 },
                    { text: '生物', max: 72 }
                ],
                center: ['50%', '50%'],
                radius: 120,
                splitArea: {
                    show: false,
                },
                name: {
                    formatter: function (value, indicator) {
                        return value;
                    }
                },
                axisLine: {
                    show: false,
                }
            },

            series: [
                {
                    name: '雷达图',
                    type: 'radar',
                    itemStyle: {
                        emphasis: {
                            lineStyle: {
                                width: 4
                            }
                        }
                    },
                    data: [

                        {
                            value: [90, 113, 140, 100, 70, 60],
                            name: '图二',
                            radarIndex: 1,
                            label: {
                                normal: {
                                    show: true
                                }
                            },
                            areaStyle: {
                                normal: {
                                    show: true,
                                    opacity: .8,
                                    color: '#fff7f2'
                                }
                            }
                        }
                    ]
                }
            ]
        }
        return option;
    }

    render() {
        return (
            <ReactEcharts
                option={this.getRadar()}
            />
        )
    }
}

export default connect(null, {
    setHeader: actions.header.setHeader
})(Radar);