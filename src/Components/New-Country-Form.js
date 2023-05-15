import React from 'react';

//component that adds a new country from the API

export default class NewCountryForm extends React.Component { 
   render() { 
    return ( 
     <div className ='card-container' style={{ display: "flex", justifyContent: "center", backgroundColor: "blue" }}> 
      <h1>Add New Country Here: </h1>
      <button onClick={() => this.props.addCountries(this.props.name)}> Add Country</button> 
     </div>
     );
    }
   }
