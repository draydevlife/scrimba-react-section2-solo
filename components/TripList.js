import React from 'react'
import TripListCard from './TripListCard'
import trips from '../data.js'

export default function TripList() {
    const tripCards = trips.map((trip, index) => {
        return <TripListCard key={index} trip={trip} />
    })
    
    return(
        <section className="trip-list">
            {tripCards}
        </section>
    )
}