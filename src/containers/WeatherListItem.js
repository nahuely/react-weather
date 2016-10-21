import React from 'react'

import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines'

const WeatherListItem = (props) => {
  const {data, color, units} = props
  const avg = Math.round(data.reduce((i, c) => i += c) / data.length)
  return(
    <div>
      <Sparklines height={80} width={220} data={data}>
        <SparklinesLine color={color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <p>{avg} {units}</p>
    </div>
  )
}

export default WeatherListItem
