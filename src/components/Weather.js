import React, {useState} from 'react';
import SelectCity from './SelectCity';
import City from './City';

const api = {
    key: 'b6907d289e10d714a6e88b30761fae22',
    baseUrl: `https://openweathermap.org/data/2.5/`
}

const Weather = () => {

    const [inputValue, setInputValue] = useState('');
    const [weatherData, setWeatherData] = useState({});
    const [date, setDate] = useState('');

    const handleSubmit = event => {
        event.preventDefault();

        fetch(`${api.baseUrl}weather?q=${inputValue}&appid=${api.key}&units=metric`)
        .then(response => response.json())
        .then(data => {
            todayDate(new Date());
            setWeatherData(data);
        })
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
            <SelectCity setInputValue={setInputValue} handleSubmit={handleSubmit} />
            <City weatherData={weatherData} date={date} inputValue={inputValue} />
        </div>
    );
}
export default Weather;