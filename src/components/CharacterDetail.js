import { Link } from "react-router-dom";


    const CharacterDetail = ( {characterFind, onImageError, placeholderImage}) => {

        return (

            <section className="card-detail">
                <Link to={'/'}> Volver </Link>
                <img
                    className="card-img"
                    src={characterFind.image ? characterFind.image : placeholderImage}
                    alt="Imagen del personaje"
                    title="Imagen del personaje"
                    onError={onImageError}
                ></img>
                <h4 className="card-title">{characterFind.name}</h4>
                <p className="card-text">Estatus: {characterFind.alive}</p>
                <p className="card-text">Especie: {characterFind.species}</p>
                <p className="card-text">Género: {characterFind.gender}</p>
                <p className="card-text">Casa: {characterFind.house}</p>
                <p className="card-text">También conocido cómo: {characterFind.aka}</p>
            </section>
        )
    };

    

export default CharacterDetail;