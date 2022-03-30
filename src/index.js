import React from 'react';
import ReactDOM from 'react-dom';

import Card from './components/Card';
import Collapse from './components/Collapse';



// function App(){
//     return <h1>Sirius</h1>;
// }

const App = () => {

    return (
        <div className='container'>

            <div className='row'>

            <div className="card-group w-100">

                <div className='col'>

                    <Collapse href="collpaseId1">

                        <Card 
                        // cardTitle="Baku"
                            cardText="Card Text I"
                            updatedTime="Last updated 1 mins ago"
                            image="https://www.picsum.photos/id/1/200/300" />

                    </Collapse>

                </div>

                <div className='col'>

                    <Collapse href="collpaseId2">

                        <Card cardTitle="Absheron"
                            cardText="Card Text II"
                            updatedTime="Last updated 2 mins ago"
                            image="https://www.picsum.photos/id/10/200/300" />

                    </Collapse>

                </div>

                <div className='col'>

                    <Collapse href="collpaseId3">

                        <Card cardTitle="Khazar"
                            cardText="Card Text III"
                            updatedTime="Last updated 3 mins ago"
                            image="https://www.picsum.photos/id/100/200/300" />

                    </Collapse>

                </div>
                </div>
            </div>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);