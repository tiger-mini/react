import React from 'react'
import ReactDOM from 'react-dom'

import Demo1 from './components/demo1'


export default  class App extends React.Component {
  render() {
    return (<div>
      <h3>请打开console控制台，查看打印信息</h3>
      <Demo1 />
      </div>)
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))
