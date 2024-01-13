import { Loader } from '@googlemaps/js-api-loader'
import { useState, useEffect } from 'react'

import locationServices from '../services/locations'
import placeServices from '../services/places'

const Map = () => {
    const loader = new Loader({
        apiKey: "AIzaSyCBzmiH3cMYxNYDfU99x7tPjZv01-ALqzk",
        version: "weekly",
        libraries: ["visualization"]
      })
    
    let map
    const d = new Date()
      
    loader
        .importLibrary('maps')
        .then(({Map}) => {
            map = new Map(document.getElementById("map"), {
                center: { lat: 45.4955, lng: -73.6278 },
                zoom: 14,
            })

            let infoWindow = new google.maps.InfoWindow({
                content: "Cliquer la carte pour afficher plus d'informations sur l'établissement",
                position: { lat: 45.4955, lng: -73.6278 },
            });

            infoWindow.open(map)

            placesData.forEach((place) => {
                const marker = new google.maps.Marker({
                    position: { lat: place.lat, lng: place.lon },
                    map,
                    title: place.name
                })

                marker.content = place

                marker.addListener("click", (mapsMouseEvent) => {
                    infoWindow.close()

                    let contentString = 
                        '<div id="content">' +
                            `<h1 id="firstHeading" class="firstHeading">${place.name}</h1>`
                    
                    for (let [key, value] of Object.entries(place)) {
                        if (value !== null) {
                            if (key == 'phoneNumber') {
                                key = 'Numéro de Téléphone'
                            } else if (key == 'email') {
                                key = 'Email'
                            } else if (key == 'website') {
                                key = 'Site Web'
                            } else if (key == 'address') {
                                key = 'Adresse'
                            } else if (key == 'description') {
                                key = 'Description'
                            } else {
                                key = null
                            }
                            
                            if (key) { contentString += `<p><b>${key}:</b> ${value}</p>` }
                            
                        }
                    }
                    
                    contentString += '</div>'
                    
                    infoWindow = new google.maps.InfoWindow({
                        position: mapsMouseEvent.latLng,
                        content: contentString
                    })

                    infoWindow.open(map)
                })
            })

        })

    const [locationData, setLocationData] = useState([])
    const [placesData, setPlacesData] = useState([])

    useEffect(() => {
        locationServices.getAll().then(locations => {
            setLocationData(locations)
        })
        placeServices.getAll().then(places => {
            setPlacesData(places)
        })
    }, [])

    loader
        .importLibrary('visualization')
        .then(() => {
            const heatmapData = locationData.map(location => {
                let weight

                if (d.getTime() - location.time < 86400000) {
                    weight = 86400000 - (location.time - d.getTime())
                } else {
                    weight = 0
                }

                return {
                    location: new google.maps.LatLng(location.lat, location.lon),
                    weight: weight
                }
            })

            const heatmap = new google.maps.visualization.HeatmapLayer({
                data: heatmapData
            })

            heatmap.setMap(map)
            heatmap.set('radius', 40)
            heatmap.set('gradient', [
                "rgba(255, 255, 255, 0)",
                "rgba(255, 175, 5, 1)", 
                "rgba(255, 100, 5, 1)",


            ])
        })

    return (
        <div>
            <h2 className="subheader">Zônes d'intérêt</h2>
            <div id="map"></div>
            
        </div>
    )
}

export default Map