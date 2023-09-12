import React from 'react'

const LocationInfo = ({ locations }) => {
  return (
    <article className='location'>
        <h2 className='location__title'>{locations?.name}</h2>
        <ul className='location__list'>
            <li className='location__item'><span className='location__label'>Type: </span><span className='location__value'>{locations?.type}</span></li>
            <li className='location__item'><span className='location__label'>Dimension: </span><span className='location__value'>{locations?.dimension || 'Unknown'}</span></li>
            <li className='location__item'><span className='location__label'>Population: </span><span className='location__value'>{locations?.residents.length}</span></li>
        </ul>
    </article>
  )
}

export default LocationInfo