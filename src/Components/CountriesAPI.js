const LOCATION_ENDPOINT = 'https://6431fe963e05ff8b371efb65.mockapi.io/Geolocator';


//api requests for CRUD operations
class CountriesApi {
    get = async () => {
        try {
            const resp = await fetch(LOCATION_ENDPOINT);
            const data = await resp.json();
            return data;
        } catch(e) {
            console.log('Opps, looks like fetchCountries had an issue.', e);
        }
        }
    put = async (country) => {
        try {
            const resp = await fetch(`${LOCATION_ENDPOINT}/${country._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(country)
            });
            return await resp.json();
        } catch(e) {
            console.log('Oops, looks like updating countries had an issue.', e);
        }
        }
    post = async (country) => {
    try {
        const resp = await fetch(`${LOCATION_ENDPOINT}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(country)
        });
        return await resp.json();
    } catch(e) {
        console.log('Oops, looks like creating a new country had an issue.', e);
    }
    }
    delete = async (_id) => {
    try {
        const resp = await fetch(`${LOCATION_ENDPOINT}/${_id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return await resp.json();
    } catch(e) {
        console.log('Oops, looks like deleting the country had an issue.', e);
    }
    }

    }
    
export const countriesApi = new CountriesApi();

