import booki from "../../images/Booki3x.png"
import ohMyFood from "../../images/ohmyfood.png"
import laPanthere from "../../images/agence-la-panthere.svg"
import kanap from "../../images/kanap.svg"
import piiquante from "../../images/piiquante.png"
import groupomania from "../../images/groupomania.png"
import portfolio from "../../images/logo.svg"

const DatasProjets = [
    {
        id: "projet_0",
        title: "Booki",
        url_image: booki,
        alt: "logo-booki",
        description: `Booki est une entreprise qui m'avait confié comme mission de faire l'intégration de leur maquette en HTML et CSS, 
                      ce site sert d'outil de planification de vacances. Il permet aux utilisateurs de trouver des hébergements et des activités dans la ville de leur choix 
                      sur n'importe quel support (desktop, mobile...). <br/> 
                      Le site fut développé en desktop first, les points techniques et fonctionnels sont : <br/> <br/>

                      &emsp;&emsp;- un champ de recherche mit en place,<br/>
                      &emsp;&emsp;- utilisation de Flexbox,<br/>
                      &emsp;&emsp;- importation des icônes de la bibliothèque Font Awesome avec un CDN,<br/>
                      &emsp;&emsp;- des cartes cliquables et qui s'animent au survol,<br/>
                      &emsp;&emsp;- un code valide aux validateurs W3C HTML et CSS,<br/>
                      &emsp;&emsp;- un site compatible avec les dernières versions de Google Chrome et de Mozilla Firefox...`,
        lien_site: "https://keotiseuf.github.io/P2/",
        lien_github: "https://github.com/KeotiseuF/P2",
    },

    {
        id: "projet_1",
        title: "Oh my food",
        url_image: ohMyFood,
        alt: "logo-ohmyfood",
        description: `Ohmyfood est une startup qui m'avait confié comme mission de développer un site 100% mobile qui répertorie les menus de restaurants gastronomiques. 
                      Il permet aux clients de composer le menu de leur repas pour que les plats soient prêts à leur arrivée. <br/> 
                      Le site fut développé en mobile first, les points techniques et fonctionnels sont : <br/> <br/>

                      &emsp;&emsp;- un site proposant le menu de 4 restaurants,<br/>
                      &emsp;&emsp;- utilisation de Github,<br/>
                      &emsp;&emsp;- utilisation de SASS,<br/>
                      &emsp;&emsp;- rediriger vers une adresse mail au clic sur "Contact",<br/>
                      &emsp;&emsp;- un coeur qui se remplit progressivement au survol,<br/>
                      &emsp;&emsp;- mise en place d'un loading spinner avant la page d'accueil... `,
        lien_site: "https://keotiseuf.github.io/P3-Animations-avec-CSS-/",
        lien_github: "https://github.com/KeotiseuF/P3-Animations-avec-CSS-"
    },

    {
        id: "projet_2",
        title: "La Panthère",
        url_image: laPanthere,
        alt: "logo-la-Panthère",
        description: `L'agence La Panthère est une agence de web design qui m'avait confié comme mission de gérer le référencement de leur site. 
                      Le site est une présentation de la société, les points techniques et fonctionnels sont : <br/> <br/>

                      &emsp;&emsp;- analyse des parties pas optimisées pour le SEO ou l'accessibilité,<br/>
                      &emsp;&emsp;- utilisation de Lighthouse,<br/>
                      &emsp;&emsp;- respect des balises sémantiques<br/>
                      &emsp;&emsp;- lecteur vocal fonctionnel sur le site,<br/>
                      &emsp;&emsp;- un code valide aux validateurs W3C HTML et CSS,<br/>
                      &emsp;&emsp;- un site compatible avec les dernières versions de Google Chrome et de Mozilla Firefox...`,
        lien_site: "https://keotiseuf.github.io/Final-P4/",
        lien_github: "https://github.com/KeotiseuF/Final-P4",
    },

    {
        id: "projet_3",
        title: "Kanap",
        url_image: kanap,
        alt: "logo-kanap",
        description: `Kanap est une marque de canapé qui m'avait confié comme mission de développer un site e-commerce, 
                      car elle souhaitait vendre ses produits sur Internet en plus de sa boutique physique.<br/>  
                      J'ai dû mettre en place la partir dynamique avec JS, les points techniques et fonctionnels sont : <br/> <br/>

                      &emsp;&emsp;- utilisation de JS vanilla,<br/>
                      &emsp;&emsp;- mise en place de boucles et conditions,<br/>
                      &emsp;&emsp;- utilisation d'une API,<br/>
                      &emsp;&emsp;- fetch pour faire des requêtes au back,<br/>
                      &emsp;&emsp;- affichage d'un produit spécifique grâce à "URLSearchParams",<br/>
                      &emsp;&emsp;- sauvegarder les données dans le localStorage...`,
        lien_site: "https://keotiseuf.github.io/P5-Dev-Web-Kanap-master/",
        lien_github: "https://github.com/KeotiseuF/P5-Dev-Web-Kanap-master",
    },

    {
        id: "projet_4",
        title: "Piiquante",
        url_image: piiquante,
        alt: "piiquante",
        description: `Piiquante est une marque de condiment à base de piment qui m'avait confié comme mission de développer 
                      une application web de critique des sauces piquantes appelée « Hot Takes » .
                      J'ai dû mettre en place la partir back-end, les points techniques et fonctionnels sont : <br/> <br/>

                      &emsp;&emsp;- utilisation de Node.js, MongoDB et Express,<br/>
                      &emsp;&emsp;- communication entre 2 servers,<br/>
                      &emsp;&emsp;- création des différentes routes pour l'API,<br/>
                      &emsp;&emsp;- mise en place de bcrypt,<br/>
                      &emsp;&emsp;- définir un rôle admin à sa BDD,<br/>
                      &emsp;&emsp;- authentification des requêtes...`,
        lien_site: "https://keotiseuf.github.io/P6---Construisez-une-API-s-curis-e-pour-une-application-d-avis-gastronomiques/",
        lien_github: "https://github.com/KeotiseuF/P6---Construisez-une-API-s-curis-e-pour-une-application-d-avis-gastronomiques",
    },

    {
        id: "projet_5",
        title: "Groupomania",
        url_image: groupomania,
        alt: "groupomania",
        description: `Groupomania est un groupe spécialisé dans la grande distribution qui m'avait confié comme mission de développer 
                      un réseau social interne pour les employés.
                      J'ai dû développer l'application de A-Z, les points techniques et fonctionnels sont : <br/> <br/>

                      &emsp;&emsp;- utilisation de MERN stack,<br/>
                      &emsp;&emsp;- mettre en place des hooks,<br/>
                      &emsp;&emsp;- respecter certaine règles de l'OWASP,<br/>
                      &emsp;&emsp;- création d'une API REST,<br/>
                      &emsp;&emsp;- mise en place d'une page de connexion,<br/>
                      &emsp;&emsp;- données de connexion sécurisées...`,
        lien_site: "https://keotiseuf.github.io/P7-Creez-un-reseau-social-d-entreprise/",
        lien_github: "https://github.com/KeotiseuF/P7-Creez-un-reseau-social-d-entreprise",
    },

    {
        id: "projet_6",
        title: "Portfolio",
        url_image: portfolio,
        alt: "portfolio",
        description: `Portfolio est un endroit où vous allez pouvoir retrouver tous mes projets.
                      Je l'ai mis en place grâce à mes connaissances apprises durant ma formation 
                      et mes recherches. Les points techniques et fonctionnels sont : <br/> <br/>

                      &emsp;&emsp;- utilisation de gsap,<br/>
                      &emsp;&emsp;- mise en place de REACT,<br/>
                      &emsp;&emsp;- animation au scroll,<br/>
                      &emsp;&emsp;- création de SVGs,<br/>
                      &emsp;&emsp;- création de lien interne,<br/>
                      &emsp;&emsp;- mise en ligne du portfolio...`,
        lien_site: "https://keotiseuf.github.io/Portfolio/",
        lien_github: "https://github.com/KeotiseuF/Portfolio",
    },
]

export default DatasProjets;