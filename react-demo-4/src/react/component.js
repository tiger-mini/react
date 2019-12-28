import { enqueueSetState } from '../react-dom/queue.js'

class Component {
    constructor( props = {} ) {
        this.isReactComponent = true;
        this.state = {};
        this.props = props;
    }

    setState( stateChange ) {
        enqueueSetState( stateChange, this );
    }
}

export default Component;
