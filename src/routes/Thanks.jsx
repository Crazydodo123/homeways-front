import { Link } from 'react-router-dom'


const Thanks = () => {
    return (
        <div id="thanks-div">
            <h1 id='thanks-header'>Merci Beaucoup!</h1>
            <Link id="return-button" to="/">Revenir à la page principale</Link>
        </div>
    )
}

export default Thanks