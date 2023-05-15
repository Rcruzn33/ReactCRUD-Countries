import React, {useState} from 'react';

//sets the states for city and blg
export const NewCityForm = (props) => {
  const[city, setCity] = useState('');
  const[blg, setBlg] = useState(undefined);

  //handles functionality of blg input, only accepts numberic value
  const handleBlgInput = (e) => {
      const int = parseInt(e.target.value, 10);
      setBlg(int >= 0 ? int : '');
  }

  //method to add new city to country, sets new string values for city and blg
  const onSubmit = (e) => {
      e.preventDefault();
      if(city && blg) {
          props.addNewCity({city,blg});
          setCity('');
          setBlg('');
      } else {
          console.log('invalid input');
       }
      };
  return (
      //input boxes for city and blg, includes create new city button
      <div style={{ display: 'inline-block' }} >
          <h4>Add a new City</h4>
          <form onSubmit = {onSubmit}>
              <input
                  type='text'
                  placeholder='city name'
                  onChange={(e) => setCity(e.target.value)}
                  value={city}
              />
              <input
                  type='text'
                  placeholder='Building #'
                  onChange={handleBlgInput}
                  value={blg}
                  />
              <button type='submit'>Create New City</button>
          </form>
      </div>
    )  
  };

