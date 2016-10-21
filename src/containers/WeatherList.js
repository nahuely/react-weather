import React, {Component} from 'react'
import {connect} from 'react-redux'

import WeatherListItem from './WeatherListItem'

class WeatherList extends Component  {
  renderWeather(cityData) {
    const name = cityData.city.name
    const temps = cityData.list.map(weather => weather.main.temp)
    const pressure = cityData.list.map(weather => weather.main.pressure)
    const humidity = cityData.list.map(weather => weather.main.humidity)

    return (
      <tr key={cityData.city.id}>
        <td>{name}</td>
        <td><WeatherListItem color="red" data={temps} units="K" /></td>
        <td><WeatherListItem color="blue" data={pressure} units="hPa" /></td>
        <td><WeatherListItem color="green" data={humidity} units="%" /></td>
      </tr>
    )
  }

  render() {
    if(!this.props.weather.length) {
      return (
        <div>
          There is no info to show, plese look up for a city!!
        </div>
      )
    }

    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps(state) {
  return {
    weather: state.weather
  }
}

export default connect(mapStateToProps)(WeatherList)
