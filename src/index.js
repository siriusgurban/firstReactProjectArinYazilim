import React from 'react';
import ReactDOM, { render } from 'react-dom';

// function App(){
//     return <h1>Sirius</h1>;
// }

const names = ['Si', 'Ri', 'Us']

function App(){
        return(
        <div>
            {names.map(name => (<h1>{name}</h1>))}
        </div>
        );
}

ReactDOM.render(
    <App/> ,
    document.getElementById('root')
);