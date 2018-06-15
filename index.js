
import $ from 'jquery';
import "vendor/chosen.jquery";
import './style.scss';

var hello = "hello World!";

hello += "yo!";

console.log(hello);

var element = document.createElement('div');
element.innerHTML = 'Siemanko!';
element.classList.add('element');
document.body.appendChild(element);