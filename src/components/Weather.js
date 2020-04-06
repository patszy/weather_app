import React, {useState} from 'react';
import SelectCity from './SelectCity';
import City from './City';

const Weather = () => {

    const [inputValue, setInputValue] = useState('');
    const [weatherData, setWeatherData] = useState({});
    const [date, setDate] = useState('');
    const [error, setError] = useState(false);

    const api = {
        key: 'b6907d289e10d714a6e88b30761fae22',
        baseUrl: `https://openweathermap.org/data/2.5/`
    }

    const handleCitySubmit = event => {
        event.preventDefault();

        fetch(`${api.baseUrl}weather?q=${inputValue}&appid=${api.key}&units=metric`)
        .then(response => {
            if(response.ok) return response;
            else throw Error("Wrong City Name");
        })
        .then(response => response.json())
        .then(data => {
            todayDate(new Date());
            setWeatherData(data);
            setError(false);
        })
        .catch( setError(true) );
    }

    const todayDate = d => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return setDate(`${day} ${date} ${month} ${year}`);
    }

    return (
        <div className='weather'>
            <SelectCity setInputValue={setInputValue} submit={handleCitySubmit} />
            <City props={error, inputValue, weatherData, date}/>
        </div>
    );
}
export default Weather;