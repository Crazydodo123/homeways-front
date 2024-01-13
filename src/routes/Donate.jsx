const Donate = () => {
    return (
        <div>
            <div id="faites-un-don">
                <h2 className="subheader">Faites un don</h2>
                <p className="main-paragraphs"><span className="bold">Le Projet Ganymède est un organisme à but non lucratif</span>, donc tous dons seront dirigés vers la distribution de biens aux itinérants dans le quartier Côte-des-Neiges.</p>
                <div className = "container-donation">
                    <a href='https://donate.stripe.com/test_cN2aHv5sM34I8xi5kk'>
                        <button id="donate-button"><span>Donnez</span></button>
                    </a>
                </div>
                <p className="container spacing">///////////////////////////////////////////////</p>
            </div>
            <div id="soutenir-gany">
                <h3 className = "infoh3">Pourquoi soutenir Ganymède ? Pourquoi participer ?</h3>
                <p className = "main-paragraphs">En soutenant Ganymède, vous ou votre entreprise/organisme participez à la lutte contre l’exclusion sociale des personnes itinérantes. L’itinérance est une situation de stress constant qui affecte négativement la santé mentale globale des personnes qui en souffrent, notamment en raison du phénomène de désaffiliation sociale qui en résulte :</p>
                <blockquote className = "main-paragraphs"><p>« Force est de constater que l’itinérance de rue constitue assurément l’une des expériences les plus extrêmes qu’il soit sur le plan de la perte de liens sociaux, du déni de reconnaissance et du manque de protection, alimentant disqualification, stigmatisation et marginalisation. À ce chapitre, Roy (1995) a affirmé que l’itinérance était une forme exemplaire d’exclusion. En raison des nombreuses ruptures sociales que cette situation entraîne, la vie de rue s’inscrit dans un parcours d’errance à-travers la ville, de solitude et d’ennui qui, comme le nomme Simard (2016), témoigne de la «perte de l’enveloppe psychosociale. » <span>(Ministère de la Santé et des Services sociaux du Québec, 2022)</span></p></blockquote>
                <p className = "main-paragraphs">En interagissant de manière répétée avec les personnes itinérantes, Ganymède espère contribuer à atténuer ce phénomène d’exclusion sociale et les problèmes de santé mentale qui y sont affiliés. Nous savons que nous ne sommes pas des sauveurs, que nous ne pouvons pas régler si simplement un problème si complexe ; mais nous croyons que nous pouvons rendre la vie des personnes itinérantes un peu plus supportable. En soutenant Ganymède, en participant aux tournées, vous nous y aidez.</p>
            </div>
        
        </div>
        
    )
}

export default Donate
