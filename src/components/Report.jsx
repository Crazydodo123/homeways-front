import { useField } from '../hooks/index'

import Map from '../routes/Map'
import locationServices from '../services/locations'

const Report = ({ sendPlace }) => {
    const report = () => {
        if (!navigator.geolocation) {
            alert("Geolocation is not supported by this browser.")
            
        } else if (document.cookie) {
            alert('Too many reports, please try again later')
        } else {
            navigator.geolocation.watchPosition(sendPosition,
                (error) => console.log(error),
                { enableHighAccuracy: true }
            )
        }
    }

    const d = new Date()

    const sendPosition = (position) => {

        locationServices.create({
            lat: position.coords.latitude, 
            lon: position.coords.longitude,
            time: d.getTime(),
        }).then(() => {
            const expires = (new Date(Date.now() + 5000)).toUTCString();
            document.cookie = "timeout=true; expires=" + expires + ";path=/;"

        })
    }
    
    const name = useField('name')
    const type = useField('type')
    const phone = useField('phone')
    const email = useField('email')
    const website = useField('website')
    const address = useField('address')
    const description = useField('description')
    
    const submit = async (event) => {
        event.preventDefault()

        if (!navigator.geolocation) {
            alert("Geolocation is not supported by this browser.")
            
        } else if (document.cookie) {
            alert('Too many reports, please try again later')
        } else {
            navigator.geolocation.watchPosition(sendPoint,
                (error) => console.log(error),
                { enableHighAccuracy: true }
            )
        }
    }

    const sendPoint = (position) => {
        const newPlace = {
            'name': name.value,
            'type': type.value,
            'phone': phone.value,
            'email': email.value,
            'website': website.value,
            'address': address.value,
            'description': description.value,
            'lat': position.coords.latitude, 
            'lon': position.coords.longitude,
            'time': d.getTime()
        }

        sendPlace(newPlace)

        name.clear()
        type.clear()
        phone.clear()
        email.clear()
        website.clear()
        address.clear()
        description.clear()

        const expires = (new Date(Date.now() + 5000)).toUTCString();
        document.cookie = "timeout=true; expires=" + expires + ";path=/;"
    }

    return (
        <div id='report-section'>
            <Map />
            <h3>Signaler un ininérant</h3>
            <button className='report-button' onClick={report}>Signaler un itinérant</button>
            <h3>Signaler un point d'intérêt</h3>
            <form onSubmit={submit}>
                <ol>
                    <li className='report-label'>
                        <label htmlFor="name">Quel est le name de l'établissement?</label><br />
                        <input className='report-input' required { ...name }></input>
                    </li>
                    <li className='report-label'>
                        <label htmlFor="type">Quel est le type de l'établissement?</label><br />
                        <input className='report-input' required { ...type }></input>
                    </li>
                    <li className='report-label'>
                        <label htmlFor="phone">Quel est le numéro de téléphone de l'établissement?</label><br />
                        <input className='report-input' { ...phone }></input>
                    </li>
                    <li className='report-label'>
                        <label htmlFor="email">Quelle est l'addresse courielle de l'établissement?</label><br />
                        <input className='report-input' { ...email }></input>
                    </li>
                    <li className='report-label'>
                        <label htmlFor="website">Quel est le site Web de l'établissement?</label><br />
                        <input className='report-input' { ...website }></input>
                    </li>
                    <li className='report-label'>
                        <label htmlFor="address">Quelle est l'addresse de l'établissement?</label><br />
                        <input className='report-input' { ...address }></input>
                    </li>
                    <li className='report-label'>
                        <label htmlFor="description">Donnez une description de l'établissement.</label><br />
                        <input className='report-input' { ...description }></input>
                    </li>
                </ol>
                <button className='report-button'>Soumettre</button>
            </form>
        </div>
    )

}

export default Report

