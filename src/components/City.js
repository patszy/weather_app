import React from 'react';

const City = props => {
    let {weatherData, date, inputValue} = props;
    let content = null;

    {(typeof weatherData.main != "undefined" && inputValue!=='') ? (
        content = (
            <React.Fragment>
                <div className="location-box">
                    <h2 className="location">{weatherData.name}, {weatherData.sys.country}</h2>
                    <p className="date">{date}</p>
                </div>
                <div className="weather-box">
                    <p className="temp">{Math.round(weatherData.main.temp)} &#176;C</p>
                    <p className="pressure">{weatherData.main.pressure} hPa</p>
                </div>
                <p className="desc">{weatherData.weather[0].main}</p>
            </React.Fragment>
        )
    ) : content = ''}

    return (
        <div className="content-box">
            {content}
        </div>
    )
}

export default City;