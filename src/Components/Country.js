import React from 'react';
import {NewCityForm} from './New-City-Form';
import ExistingCity from './Existing-City';


export const Country = (props) => {
  const {country,updateCountries} = props;

  //function to delete a city
  const deleteCity = (cityIndex) => {
    const updatedCities = [...country.cities]; // create a copy of the cities array
    updatedCities.splice(cityIndex, 1); // remove the city at the given index
    updateCountries({ ...country, cities: updatedCities });
  }
  
  //function to add a new city(new or existing)
  const addNewCity = (city) => updateCountries({...country, cities: [...country.cities, city]});
  
  //function to render a newly created city using input boxes
  const renderCities = () =>
    country.cities.map((city) => (
      <div key={city._id}>
        {`${city.city} Building: ${city.blg}`}
        <button onClick={() => deleteCity(city._id)}>Delete</button>
      </div>
    ));

  return (
    
    //passing props to "create new city form" and "add existing city" components
    <div>
    <NewCityForm addNewCity = {addNewCity} />
    <span>  or  </span>
    <ExistingCity city={country.city} blg={country.blg} addNewCity={addNewCity}/>
      {renderCities()}
      </div>
  );
};

