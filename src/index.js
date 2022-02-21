import Component from './Component';
//const Component = require('./Component');
import './css/style.css';
//require('./css/style.css');
import sumInnerFunc from './math';

const container = document.getElementById('root');
//const res = sum(2,2);

console.log(sumInnerFunc(5));

container.append(` And hello again - ${res}`);