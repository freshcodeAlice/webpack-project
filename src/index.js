import Component from './Component';
//const Component = require('./Component');
import './css/style.css';
//require('./css/style.css');
//import {sum, pow, sub, div, multy} from './math';
import twentyThree, * as MyMath from './math';

const container = document.getElementById('root');
//const res = sum(2,2);
console.log(Component);

console.log(MyMath);
console.log(twentyThree);

container.append(` And hello again`);