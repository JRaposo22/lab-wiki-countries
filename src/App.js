import {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Header from './components/Header';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

//API URL
const apiURL = 'https://ih-countries-api.herokuapp.com/countries';

function App() {
  const [countries, setCountries] = useState([]);

  //Function to call the API and set the state
  const getCountries = async () => {
    try {
      let response = await axios.get(apiURL);
      setCountries(response.data);
      console.log(response.data)
    } catch (error) {
      console.log(error);
    }
  };

  //Use effect with empty array to only run in the mounting phase
  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path="/" element={<CountriesList countries={countries}/>} />
            <Route path="/countries/:countryCode" element={<CountryDetails/>} />

        </Routes>
     
    </div>
  );
}

export default App;
