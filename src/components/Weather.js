import React, {Component} from 'react';
import SelectCity from './SelectCity';
import City from './City';

//Key to API;
const APIKey = 'b6907d289e10d714a6e88b30761fae22';

const todayDate = d => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
}

class Weather extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: '',
            cityName: '',
            date: '',
            weatherData: '',
            error: false
        }
    }

    handleInputChange = event => {
        this.setState({
            inputValue: event.target.value
        });
    }

    handleCitySubmit = event => {
        event.preventDefault();
        const baseUrl = `https://openweathermap.org/data/2.5/weather?q=${this.state.inputValue}&appid=${APIKey}&units=metric`;

        fetch(baseUrl)
        .then(response => {
            if(response.ok) return response;
            throw Error("Wrong City Name");
        })
        .then(response => response.json())
        .then(data => {
            this.setState(prevState => ({
                error: false,
                cityName: prevState.inputValue,
                date: todayDate(new Date()),
                weatherData: data
            }))
        })
        .catch(error => {
            console.log(error);
            this.setState(prevState => ({
                error: true,
                cityName: prevState.inputValue
            }))
        });
    }

    render() {
        return (
            <div className='weather'>
                <SelectCity cityName={this.state.cityName} getInputValue={this.handleInputChange} submit={this.handleCitySubmit} />
                <City weather={this.state} />
            </div>
        );
    }
}
export default Weather;