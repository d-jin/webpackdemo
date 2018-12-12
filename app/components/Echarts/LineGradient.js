import React from 'react'
import { connect } from 'react-redux'
import actions from '../actions/index'
import ReactEcharts from 'echarts-for-react'



class LineGradient extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentWillMount() {
        const { setHeader } = this.props;
        // setHeader({ title: 'echarts画图demo', back: 'true', home: 'true' });


    }
    getLineGradient() {
        let data = [["2000-06-05", 116], ["2000-06-06", 129], ["2000-06-07", 135], ["2000-06-08", 60], ["2000-06-09", 73], ["2000-06-10", 85], ["2000-06-11", 73], ["2000-06-12", 68], ["2000-06-13", 92], ["2000-06-14", 130], ["2000-06-15", 245], ["2000-06-16", 139], ["2000-06-17", 115], ["2000-06-18", 111], ["2000-06-19", 309], ["2000-06-20", 206], ["2000-06-21", 137], ["2000-06-22", 128], ["2000-06-23", 85], ["2000-06-24", 94], ["2000-06-25", 71], ["2000-06-26", 106], ["2000-06-27", 84], ["2000-06-28", 93], ["2000-06-29", 85], ["2000-06-30", 73], ["2000-07-01", 83], ["2000-07-02", 125], ["2000-07-03", 107], ["2000-07-04", 82], ["2000-07-05", 44], ["2000-07-06", 72], ["2000-07-07", 106], ["2000-07-08", 107], ["2000-07-09", 66], ["2000-07-10", 91], ["2000-07-11", 92], ["2000-07-12", 113], ["2000-07-13", 107], ["2000-07-14", 131], ["2000-07-15", 111], ["2000-07-16", 64], ["2000-07-17", 69], ["2000-07-18", 88], ["2000-07-19", 77], ["2000-07-20", 83], ["2000-07-21", 111], ["2000-07-22", 57], ["2000-07-23", 55], ["2000-07-24", 60]];
        let data1 = [["2000-06-05", 16], ["2000-06-06", 19], ["2000-06-07", 15], ["2000-06-08", 6], ["2000-06-09", 3], ["2000-06-10", 85], ["2000-06-11", 73], ["2000-06-12", 68], ["2000-06-13", 92], ["2000-06-14", 130], ["2000-06-15", 245], ["2000-06-16", 139], ["2000-06-17", 115], ["2000-06-18", 111], ["2000-06-19", 309], ["2000-06-20", 206], ["2000-06-21", 137], ["2000-06-22", 128], ["2000-06-23", 85], ["2000-06-24", 94], ["2000-06-25", 71], ["2000-06-26", 106], ["2000-06-27", 84], ["2000-06-28", 93], ["2000-06-29", 85], ["2000-06-30", 73], ["2000-07-01", 83], ["2000-07-02", 125], ["2000-07-03", 107], ["2000-07-04", 82], ["2000-07-05", 44], ["2000-07-06", 72], ["2000-07-07", 106], ["2000-07-08", 107], ["2000-07-09", 66], ["2000-07-10", 91], ["2000-07-11", 92], ["2000-07-12", 113], ["2000-07-13", 107], ["2000-07-14", 131], ["2000-07-15", 111], ["2000-07-16", 64], ["2000-07-17", 69], ["2000-07-18", 88], ["2000-07-19", 77], ["2000-07-20", 83], ["2000-07-21", 111], ["2000-07-22", 57], ["2000-07-23", 55], ["2000-07-24", 60]]
        var dateList = data.map(function (item) {
            return item[0];
        });
        var valueList = data.map(function (item) {
            return item[1];
        });
        var valueList1 = data1.map(function (item) {
            return item[1];
        });
        const titleName = ['数据一', '数据二']

        const option = {
            title: {
                left: 'center',
                text: '折线图'
            },
            color: ['#4cbc00', '#ff8e01'],
            tooltip: {
                trigger: 'axis',
                triggerOn: 'click',
                axisPointer: {
                    type: 'none'
                },
            },
            xAxis: {
                data: dateList,
                gridIndex: 1,
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: false
                },
            },
            yAxis: {
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#aaa',
                        type: 'dashed'
                    }
                },
                gridIndex: 1,
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: false
                }
            },
            grid: [{}, {
                top: '10%',
                bottom: '60%'
            }],
            series: [{
                type: 'line',
                name: titleName[0],
                showSymbol: false,
                smooth: true,
                data: valueList,
            },
            {
                type: 'line',
                name: titleName[1],
                showSymbol: false,
                smooth: true,
                data: valueList1,
            }
            ]
        };
        return option

    }

    render() {
        return (
            <ReactEcharts
                option={this.getLineGradient()}
            />
        )
    }
}

export default connect(null, {
    setHeader: actions.header.setHeader
})(LineGradient);