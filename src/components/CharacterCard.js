import { Link } from "react-router-dom";

function CharacterCard({ eachCharacter }) {

    const placeholderImage = 'https://via.placeholder.com/210x295/ﬀﬀﬀ/666666/?text=TooMuggletosee'

    const onImageError = (e) => {
        e.target.src = placeholderImage
    }

    return (
        <li className="personaje">
            {/* ¿PORQUÉ SI PONGO EN CLASSNAME=CARD SE ME APLICAN ESTILOS SOLOS? */}
            <Link to={`/personajes/${eachCharacter.id}`}>
                <img
                    className="card-img"
                    src={eachCharacter.image ? eachCharacter.image : placeholderImage}
                    alt="Imagen del personaje"
                    title="Imagen del personaje"
                    onError={onImageError}
                ></img>
                <h4 className="card-title">{eachCharacter.name}</h4>
                <p className="card-species">{eachCharacter.species}</p>
            </Link>
        </li>
    )
}

export default CharacterCard;

