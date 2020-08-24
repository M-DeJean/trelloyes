import React from 'react';
import ReactDOM from 'react-dom';
import STORE from './store';
import Card from './card';
import List from '.list';

function App(props) {



    // If you have an array as an input, you can map over it to
    // create child components
    const people = peopleData.map(person =>
        <Person key={person.id} name={person.name} />
    );

    return (
        <div className="personList">
            <h3>Person List</h3>
            {people}
        </div>
    );
};

export default App
