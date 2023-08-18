// import React from "react";
// import ReactDOM from "react-dom";

const { createElement } = require("react");

// const h1React = React.createElement('h1', {
//     title: 'Hello',
//     className: 'heading',
// }, 'Hello guys!');

// ReactDOM.render(h1React, document.getElementById('root'));


// const h1Dom = document.createElement('h1');
// h1Dom.className = 'heading';
// h1Dom.title = 'Hello';
// h1Dom.innerText = 'Hello guys!';

// document.body.appendChild(h1Dom);

ReactDOM.render(
    React.createElement(
        'div', {
        className: 'post-item'
    },
        React.createElement('h2', {
            title: 'Learn React at F8'
        }, 'Learn React'),
        React.createElement('p', {

        }, 'Zero to Hero React Tutorial')
    ), document.body
)