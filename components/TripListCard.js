import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons' 

export default function TripListCard( { trip } ) {
    return(
        <div className="trip-list-card">
            <div>
                <img className="trip-list-card__image" src={trip.imageUrl} />
            </div>
            <div>
                <div>
                    <FontAwesomeIcon className="trip-list-card__location-icon" icon={faLocationDot} />
                    <span className="trip-list-card__country">{trip.location}</span>
                    <a className="trip-list-card__maplink" href={trip.googleMapsUrl} rel="noopener" target="_blank">View on Google Maps</a>
                </div>
                <h1 className="trip-list-card__heading">{trip.title}</h1>
                <h4 className="trip-list-card__date">{`${trip.startDate} - ${trip.endDate}`}</h4>
                <p className="trip-list-card__description">{trip.description}</p>
            </div>
        </div>
    )
}