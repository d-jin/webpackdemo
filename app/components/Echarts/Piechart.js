import React from 'react'
import { connect } from 'react-redux'
import actions from '../actions/index'
import ReactEcharts from 'echarts-for-react'



class Echarts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { value: 335 },
                { value: 310 },
                { value: 234, name: '环形图' },
                { value: 135 },
                { value: 1548 }
            ]
        }
    }

    componentWillMount() {
        const { setHeader } = this.props;
        // setHeader({ title: 'echarts画图demo', back: 'true', home: 'true' });

    }
    getPieChart() {
        const { data } = this.state;
        let option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            // legend: {
            //     orient: 'vertical',
            //     x: 'left',
            //     data: titleTxt
            // },
            color: ['#f34141', '#ff8e01', '#4cbc00', '#4ccad8', '#f2ea01'],
            series: [
                {
                    // name: '访问来源',
                    type: 'pie',
                    radius: ['60%', '80%'],
                    // animation: false,
                    silent: true,
                    label: {
                        normal: {
                            show: true,
                            position: 'center'
                        },
                    },
                    data: data
                }
            ]
        };
        return option;
    }

    render() {
        return (
            <ReactEcharts
                option={this.getPieChart()}
            />
        )
    }
}

export default connect(null, {
    setHeader: actions.header.setHeader
})(Echarts);