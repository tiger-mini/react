import React from '../react/index.js';

export default class Counter extends React.Component {
	constructor(props) {
        super(props);
		    this.handleAddClick = this.handleAddClick.bind(this);
		    this.state = {
			    count: 0
		    }
	}

  componentWillMount() {
    console.log('will mount')
  }

	componentDidMount() {
		console.log("mount")
	}
 
	componentWillUpdate() {
    	console.log("will update")
    }
    
  componentDidUpdate() {
   	console.log("did update")
  }

  handleAddClick() {
    	const { count } = this.state;
    	this.setState({ count: count + 1 })
	}
	
  render() {
    	console.log('render')
    	const { count } = this.state;
        return (<div className="demo">
        	<h1>当前计数器值:{count}</h1>
        	<input type="button" onClick ={this.handleAddClick} value="计数器 + 1" />
        </div>)
  }

}
