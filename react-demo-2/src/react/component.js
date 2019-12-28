import RectDOM from '../react-dom/index.js';

class Component {
    constructor( props = {} ) {
        this.state = {};
        this.props = props;
    }

    setState( stateChange ) {
        Object.assign( this.state, stateChange );
        RectDOM.renderComponent( this );
    }
}

export default Component;
