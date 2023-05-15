import React from 'react';

//component that adds a new city from API
export default class ExistingCity extends React.Component { 
   render() { 
    return ( 
     <div style={{ display: 'inline-block' }} > 
      <button onClick={() => this.props.addNewCity({ city: (this.props.city), blg: (this.props.blg) })}>
   Add Existing City
 </button>
     </div>
     );
    }
   }

