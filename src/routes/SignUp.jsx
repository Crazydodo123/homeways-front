import { useField } from '../hooks/index.js'

const SignUp = ({ sendUser }) => {
    const nom = useField('nom')
    const age = useField('age', 'number')
    const education = useField('education')
    const participation = useField('participation')
    const recurrence = useField('recurrence')
    const weekend = useField('weekend')
    const holiday = useField('holiday')
    const experience = useField('experience')
    const formation = useField('formation')
    const misc = useField('misc')
    const casier = useField('casier')   

    const submit = async (event) => {
        event.preventDefault()

        const newUser = {
            'nom': nom.value,
            'age': age.value,
            'education': education.value,
            'participation': participation.value,
            'recurrence': recurrence.value,
            'weekend': weekend.value,
            'holiday': holiday.value,
            'experience': experience.value,
            'formation': formation.value,
            'misc': misc.value,
            'casier': casier.value
        }

        sendUser(newUser)

        nom.clear()
        age.clear()
        education.clear()
        participation.clear()
        recurrence.clear()
        weekend.clear()
        holiday.clear()
        experience.clear()
        formation.clear()
        misc.clear()
        casier.clear()
    }

    return (
        <div>
            <h2 className='subheader' id='signup-header'>Inscrivez-vous pour devenir bénévole dès aujourd'hui!</h2>
            <form id='signup-form' onSubmit={submit}>
                <ol>
                    <li className='signup-label'>
                        <label htmlFor="nom">Quel est votre nom?</label><br />
                        <input className='signup-input' required { ...nom }></input>
                    </li>
                    <li className='signup-label'>
                        <label htmlFor ='age'>Quel est votre âge?</label><br />
                        <input className='signup-input' required min={4} max={99} { ...age }></input>
                    </li>
                    <li className='signup-label'>
                        <label htmlFor="education">Si c'est le cas, dans quel établissement d’éducation post-secondaire de la région de Montréal êtes-vous enrôlé?</label><br />
                        <input className='signup-input' { ...education }></input>
                    </li>
                    <li className='signup-label'>
                        <label htmlFor ='participation'>Préférez-vous participer aux tournées ou à la préparation des produits?</label><br />
                        <input className='signup-input' required { ...participation }></input>
                    </li>
                    <li className='signup-label'>
                        <label htmlFor ='recurrence'>Les tournées auront principalement lieu aux alentours de midi. Combien de fois par mois pensez-vous pouvoir participer à une tournée ? À la préparation des produits?</label><br />
                        <input className='signup-input' required { ...recurrence }></input>
                    </li>
                    <li className='signup-label'>
                        <label htmlFor ='weekend'>Seriez-vous prêt à participer à une tournée ou à la préparation de produits les fins de semaines?</label><br />
                        <input className='signup-input' required { ...weekend }></input>
                    </li>
                    <li className='signup-label'>
                        <label htmlFor="holiday">Seriez-vous prêt à participer à une tournée ou à la préparation des produits certains jours fériés? Lesquels?</label><br />
                        <input className='signup-input' required { ...holiday }></input>
                    </li>
                    <li className='signup-label'>
                        <label htmlFor="experience">Avez-vous de l’expérience d’interaction avec ou de service aux itinérants? Avec des personnes toxicomanes ou souffrant de problèmes de santé mentale graves? Avec des personnes agressives ou violentes? Précisez. (Votre réponse à cette question n’influencera pas votre admission au sein de l’équipe de Ganymède).</label><br />
                        <textarea className='signup-input' required { ...experience }></textarea>
                    </li>
                    <li className='signup-label'>
                        <label htmlFor="formation">Avez-vous reçu des formations en premiers soins ou premiers secours? Précisez. (Votre réponse à cette question n’influencera pas votre admission au sein de l’équipe de Ganymède).</label><br />
                        <textarea className='signup-input' required { ...formation }></textarea>
                    </li>
                    <li className='signup-label'>
                        <label htmlFor="misc">Avez-vous une expérience autre quelconque dont vous pensez qu’elle pourrait vous être utile dans le contexte des activités de Ganymède? Précisez.</label><br />
                        <textarea className='signup-input' required { ...misc }></textarea>
                    </li>
                    <li className='signup-label'>
                        <label htmlFor="casier">Acceptez-vous que Ganymède demande à consulter votre casier judiciaire? Cette procédure est nécessaire pour que vous puissiez participer aux activités de Ganymède. Si vous n’avez pas de casier judiciaire, elle ne donnera à Ganymède aucune information sur vous. Si vous avez un casier judiciaire, vous pourrez quand même probablement participer aux activités de Ganymède.</label><br />
                        <textarea className='signup-input' required { ...casier }></textarea>
                    </li>
                </ol>
                <button id="button-signup" type='submit'>Soumettre votre candidature</button>
            </form>
        </div>
    )
}

export default SignUp