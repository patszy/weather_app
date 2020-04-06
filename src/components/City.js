import React from 'react';

const City = props => {
    let {error, inputValue, weatherData, date} = props;
    let content = null;

    if(!error && inputValue) {
        content = (
            <React.Fragment>
                 <div className="location-box">
                     <h2 className="location">{inputValue}, {weatherData.sys.country}</h2>
                     <p className="date">{date}</p>
                 </div>
                 <div className="weather-box">
                     <p className="temp">{Math.round(weatherData.main.temp)} &#176;C</p>
                     <p className="pressure">{weatherData.main.pressure} hPa</p>
                 </div>
                 <p className="desc">{weatherData.weather[0].main}</p>
            </React.Fragment>
        )
    }

    return (
        <div>
            {error ? `Not found: ${inputValue}` : content}
        </div>
    )
}

export default City;