import { useField } from '../hooks'

const Contact = ({ sendMessage }) => {
    const firstName = useField('first-name')
    const lastName = useField('last-name')
    const email = useField('email')
    const phoneNumber = useField('phone-number')
    const message = useField('message', null)


    const submit = async (event) => {
        event.preventDefault()

        const newMessage = {
            'firstName': firstName.value,
            'lastName': lastName.value,
            'email': email.value,
            'phoneNumber': phoneNumber.value,
            'message': message.value,
        }

        sendMessage(newMessage)

        firstName.clear()
        lastName.clear()
        email.clear()
        phoneNumber.clear()
        message.clear()
    }



    return (
        <>
            <h2 className="subheader">Contactez Nous</h2>
            <form id="contact-form" onSubmit={submit}>
                <div className="input-section">
                    <p className="subsection-header">Nom *</p>
                    <div className="input-subsection">
                        <div className="input-field">
                            <input className="text-input" required { ...firstName } ></input>
                            <label htmlFor="first-name" className="input-label">Prénom</label>
                        </div>
                            <div className="input-field">
                            <input className="text-input" required { ...lastName } ></input>
                            <label htmlFor="last-name" className="input-label">Nom de famille</label>
                        </div>
                </div>
                </div>
                <div className="input-section">
                    <div className="input-subsection">
                        <div className="input-field">
                            <p className="subsection-header">Email *</p>
                            <input className="text-input" required { ...email }></input>
                        </div>
                        <div className="input-field">
                            <p className="subsection-header">Numéro de téléphone</p>
                            <input className="text-input" { ...phoneNumber } ></input>
                        </div>
                    </div>
                </div>
                <div className="big-subsection">
                    <p className="subsection-header">Message *</p>
                    <textarea { ...message } required ></textarea>
                    <br />
                    <br />
                    <button type="submit" id="submit-button">Soumettre</button>
                </div>
            </form>
        </>
    )
}

export default Contact
