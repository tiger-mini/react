import React from '../react/index.js';

export default class Counter extends React.Component {
	constructor(props) {
        super(props);
		this.handleAddClick = this.handleAddClick.bind(this);
		this.state = {
			count: 0
		}
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
    	for(let i = 0; i < 1000; i++) {
				this.setState(preState => {
					console.log( preState.count );
					return {
						count: preState.count + 1
					}
				})
			}
	}
	
  render() {
    	const { count } = this.state;
		  console.log('render')
      return (<div className="demo">
        <h1>当前计数器值:{count}</h1>
        <input type="button" onClick ={this.handleAddClick} value="计数器 + 1" />
      </div>)
  }

}
