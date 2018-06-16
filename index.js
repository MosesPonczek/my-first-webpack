
import './style.scss';

import $ from 'jquery';
window.jQuery = $;
window.$ = $;

var element = document.createElement('div');
element.innerHTML = 'Siemanko!';
element.classList.add('element');
document.body.appendChild(element);

function animationElement() {
    $('.element').on('click', function(){
        $(this).fadeToggle();
    });
}

jQuery(document).ready(function(){
    animationElement();
});