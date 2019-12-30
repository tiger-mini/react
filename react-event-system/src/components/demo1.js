import React from 'react'
import '../../css/index'

export default class Demo1 extends React.Component{
  
  constructor(props) {
    super(props)
    this.clickHandler = this.clickHandler.bind(this)
  }
  
  render() {
    return <div className="box" onClick={this.clickHandler}>文本内容</div>
  }
  
  clickHandler(e) {
    console.log('click callback', e)
  }
  
}
