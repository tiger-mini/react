import React from '../react/index.js';

export default class Welcome extends React.Component {
	constructor(props) {
        super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	
  render() {
     console.log('render render')
     return <div className="demo" onClick={this.handleClick}>Hello, {this.props.name}</div>;
  }

  handleClick() {
		 console.log('click')
	}
}
