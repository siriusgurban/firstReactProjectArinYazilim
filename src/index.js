import React from 'react';
import ReactDOM, { render } from 'react-dom';

import Card from './components/Card';


// function App(){
//     return <h1>Sirius</h1>;
// }

const App = () => {

        return(
        <div>
            <div class="card-group">

            <Card cardTitle="Baku"/>

            <Card cardTitle="Absheron"/>

            <Card cardTitle="Khazar"/>

            </div>
        </div>
        );
}

ReactDOM.render(
    <App/> ,
    document.getElementById('root')
);