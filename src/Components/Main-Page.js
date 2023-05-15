import React, {Component} from 'react';
import {Country} from './Country';
import {countriesApi} from './CountriesAPI';
import NewCountryForm from './New-Country-Form';



//setting the states of properties, fetches data as soon as component is mounted
class MainPage extends Component {
  state = {
      countries : [],
      name : '',
  };
  componentDidMount() {
      this.fetchCountries();
  }
  
  //asynchronous functions that make API requests to perform CRUD operations
  fetchCountries = async () => {
      const countries = await countriesApi.get();
      this.setState({countries});
  };
  updateCountries = async (updatedCountry) => {
      await countriesApi.put(updatedCountry);
      this.fetchCountries();
  };
  addCountries = async (newCountry) => {
    await countriesApi.post(newCountry);
    this.fetchCountries();
};
  deleteCountries = async (countryId) => {
      await countriesApi.delete(countryId);
      this.fetchCountries();
  };

  render() {
    const {countries} = this.state;
    return (
      <div> {/*coponent that adds new country*/}
      <NewCountryForm addCountries={this.addCountries}/>
        {/*country component*/}
        {countries.map((country) => (  
          <div id={country._id} className="card">
            <div className="card-header" style={{backgroundColor: "green" }}>
              <table>
                <tbody>
                  <tr>
                    <td><h2>{country.name}</h2></td>
                    <td style={{ textAlign: "center" }}>
                      <button
                        className="btn btn-danger"
                        onClick={() => this.deleteCountries(country._id)}
                      >
                        Delete Country
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='card-body'>
            {/*component to add and delete new city*/}
            <Country
                country = {country}
                key = {country._id}
                updateCountries = {this.updateCountries}
              />
            </div>
            <div className="card-footer">
            </div>
          </div>
        ))}
        </div>
    );
  }
  

}
export default MainPage;



