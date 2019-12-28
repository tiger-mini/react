import Component from './component.js';

const React = { createElement, Component }
function createElement( tag, attrs, ...children ) {
    return {tag, attrs, children}
}
export default React;
