import { Link } from 'react-router-dom'

const Info = () => {
    return (
        <div>
            <div className = "container">
                <img id="main-image" src="src/assets/itinerance.png" alt="Itinerant"/>
                <h1 className = "font-size-big" id="title">Projet Ganymède</h1>
                <Link id="main-cta" to="/sign-up"><span>Aidez la cause</span></Link>
            </div>
            <div id="who-we-r">
                <h3 className = "infoh3">Qui sommes-nous?</h3>
                <p className = "main-paragraphs">Fondé en 2023, Ganymède est une initiative de onze étudiants du collégial. Constatant la réalité et les dangers de l’itinérance dans le quartier Côte-des-Neiges, les membres fondateurs décident d’organiser un groupe qui distribuera, quotidiennement, de l’eau, du café ou du bouillon aux personnes itinérantes du quartier et engagera la discussion avec eux. De cette façon, Ganymède cherche à atténuer la pression de deux dangers importants pour les personnes itinérantes : les risques liés à la température et l’exclusion sociale. En donnant de l’eau fraîche en été et des boissons chaudes en hiver, le groupe espère réduire les risques d’insolation et d’hypothermie guettant les personnes itinérantes ; en discutant avec elles, ils souhaitent leur fournir un besoin de première nécessité fréquemment oublié : les interactions humaines.</p>
                <p className = "main-paragraphs">Actuellement, Ganymède est à la recherche d’un organisme à but non-lucratif (OBNL) prêt à gérer ses fonds. Nous espérons pouvoir commencer nos activités de distribuGon à l’été 2024.</p>
            </div>
            <div id="notre-mission">
                <h3 className = "infoh3">Notre mission</h3>
                <div className="mission-container">
                    <div id="mission-text">
                        <ul>
                            <li>
                                Lutter contre les dangers liés à la température et à l’exclusion sociale qui visent les personnes en situation d’itinérance, en :
                                <ul>
                                    <li><span className="bold">Distribuant quotidiennement</span> de l’eau, du café ou du bouillon;</li>
                                    <li><span className="bold">Engageant la conversation</span> avec les personnes servies.</li>
                                </ul>
                            </li>
                            <li>Offrir aux étudiants post-secondaires <span className="bold">une opportunité de s’impliquer positivement</span> dans leur communauté d’étude.</li>
                        </ul>
                    </div>
                    <img id="img-ppl" src="src/assets/insideroom.png" alt="peopleinaroom" height="300px"/>
                </div>
            </div>
            
        
            
            
            <div id="comment-aider">
                <h3 className="infoh3">Comment puis-je aider ?</h3>
                <p className = "main-paragraphs"><span className="bold">Ganymède n’accepte pas de dons en argent pour le moment.</span> Nous voulons en effet être sûr de gérer les dons de façon parfaitement appropriée, ce qui n’est pas possible tant que nous ne sommes pas intégrés à un OBNL. Toutefois, les individus et les entreprises peuvent aider Ganymède à atteindre ce premier objectif de plusieurs façons, par exemple en :</p>
                <ol className = "main-paragraphs">
                    <li>Acceptant de faire de Ganymède un projet de votre OBNL;</li>
                    <li>Acceptant d’offrir des commandites au projet (entreprises) en envoyant un courriel à le.projet.ganymede@gmail.com ;</li>
                    <li>Signalant votre intérêt à rejoindre le projet à être de bénévole en remplissant le formulaire.</li>
                </ol>
            </div>
            
        </div>
    )
}

export default Info
