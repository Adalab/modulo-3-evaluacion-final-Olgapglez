import 

function xxxxx ({xxxxxxx}) {

   
    return ( 
        <li className="personaje"> 
        {/* ¿PORQUÉ SI PONGO EN CLASSNAME=CARD SE ME APLICAN ESTILOS SOLOS? */}
            <a href=".">
            <img
            className="card-img"
            src={eachCharacter.image ? eachCharacter.image : placeholderImage}
            alt="Imagen del personaje"
            title="Imagen del personaje"
            onError={onImageError}
            ></img>
            <h4 className="card-title">{eachCharacter.name}</h4>
            <p className="card-species">{eachCharacter.species}</p>
            </a>
        </li>
    )
}

export default CharacterDetail;