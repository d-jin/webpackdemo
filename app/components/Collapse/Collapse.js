import React from 'react'
import styles from './Collapse.scss'
import { connect } from 'react-redux'
import actions from '../actions/index'

class Collapse extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            isShow1:false,
            isShow2:false,
            isShow3:false
        }
    }

    componentWillMount() {
        const { setHeader } = this.props;
        setHeader({ title: '折叠面板', back:true,home:true})

    }
    click(key){
        if(key===1){
            this.setState({
                isShow1:!this.state.isShow1,
                isShow2:false,
                isShow3:false
            })
        }else if(key===2){
            this.setState({
                isShow1:false,
                isShow2:!this.state.isShow2,
                isShow3:false
            })
        }else if(key===3){
            this.setState({
                isShow1:false,
                isShow2:false,
                isShow3:!this.state.isShow3
            })
        }
        
    }

    render() {
        const {isShow1,isShow2,isShow3} = this.state;
        return (
            <div className={styles.contain}>
                <div className={styles.box}>
                    <div className={styles.txt} onClick={this.click.bind(this,1)}>
                         <div>1111</div>
                         <span>></span>
                    </div>
                    <div style={{display:isShow1?'block':'none'}}>
                        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                    </div>

                    <div className={styles.txt} onClick={this.click.bind(this,2)}>
                         <div>2222</div>
                         <span>></span>
                    </div>
                    <div style={{display:isShow2?'block':'none'}}>
                        <div>简化流程：设计简洁直观的操作流程；</div>
                        <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                        <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
                    </div>

                    <div className={styles.txt} onClick={this.click.bind(this,3)}>
                         <div>3333</div>
                         <span>></span>
                    </div>
                    <div style={{display:isShow3?'block':'none'}}>
                        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect (null,{
    setHeader:actions.header.setHeader
})(Collapse);