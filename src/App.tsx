import React from 'react';
import Ad from './Ad/Ad';
import AdDesigner from './addesigner/AdDesigner';
import './App.css';
import Header from './header/Header';
import Votes from './votes/Votes';

function App() {
  return (
    <div className="App">
     <Header user="Greg"/>
     <section className="Flavors">

     
     <Ad flavor="Chocolate" fontSize={16} darkTheme={true}/>
     <Ad flavor="Vanilla" fontSize={16} darkTheme={false}/>
     <Ad flavor="Strawberry" fontSize={16} darkTheme={true}/>
     </section>
     <section className="MainDisplay">
        <AdDesigner/>
        <Votes/>
     </section>
    </div>
  );
}

export default App;
