import { renderComponent } from './diff.js'

const setStateQueue = [];
const renderQueue = [];

function defer( fn ) {
  return Promise.resolve().then( fn );
}


function flush() {
  let item, component;
  
  while ( item = setStateQueue.shift() ) {
    
    const { stateChange, component } = item;
    
    if ( !component.prevState ) {
      component.prevState = Object.assign( {}, component.state );
    }
    
    if ( typeof stateChange === 'function' ) {
      Object.assign( component.state, stateChange( component.prevState, component.props ) );
    } else {
      Object.assign( component.state, stateChange );
    }
    
    component.prevState = component.state;
    
  }
  
  while ( component = renderQueue.shift() ) {
    renderComponent( component );
  }
  
}

export function enqueueSetState( stateChange, component ) {
  
  if ( setStateQueue.length === 0 ) {
    defer( flush );
  }
  setStateQueue.push( {
    stateChange,
    component
  } );
  
  if ( !renderQueue.some( item => item === component ) ) {
    renderQueue.push( component );
  }
}






