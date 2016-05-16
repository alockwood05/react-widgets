// React needs to be on this page for the react babelifying to work, global React would work too
import  React from 'react';
import  ReactDOM from 'react-dom';
import HelloWorld from './hello-world/index.jsx';


/* render the hello world component */
ReactDOM.render(<HelloWorld />, document.getElementById('hello-world'));

