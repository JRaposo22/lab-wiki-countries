import React from 'react'
import { useState, useEffect } from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';

function CountryDetails() {
    const [country, setCountry] = useState(null);
    const {countryCode} = useParams();

    const getCountry = async () => {

        try {
            let response = await axios.get(`https://ih-countries-api.herokuapp.com/countries/${countryCode}`)
            setCountry(response.data)
            console.log(response.data)
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
    getCountry();
  }, []);

  return (
    <div>
        {country &&
         (<>
            <h2>{country.name.common}</h2>
            <h4>Capital: {country.capital[0]}</h4>
            
            
          </>)}
    </div>
  )
}

export default CountryDetails