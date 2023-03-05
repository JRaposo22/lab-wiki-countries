import React from 'react'
import {Link} from 'react-router-dom';

function CountriesList(props) {
    const {countries} = props;
  return (
    <div>
        <h2>Countries List</h2>
        {countries.map((country) => {
            return (
                <div key={country._id}>
                    <Link to={`/countries/${country.alpha3Code}`}>{country.name.common}</Link>

                </div>
        )
        })}
    </div>
  )
}

export default CountriesList