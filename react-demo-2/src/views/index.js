import React from '../react/index.js';
import Hello from './WelCome.js'
import Counter from './Counter.js'

export default class IndexPage extends React.Component {
	
    render() {
        return (<div>
        	<Hello name="张三" />
        	<Counter />
        </div>)
    }

   
}
