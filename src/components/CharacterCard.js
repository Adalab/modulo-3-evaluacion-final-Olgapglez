
function CharacterCard({eachCharacter}) {

    return ( 
        <li className="">
            <a href=".">
            <img
            className="card-img"
            src={eachCharacter.image}
            alt="Imagen del personaje"
            title="Imagen del personaje"
            ></img>
            <h4 className="card-title">{eachCharacter.name}</h4>
            <p className="card-species">{eachCharacter.species}</p>
            </a>
        </li>
    )
}

export default CharacterCard;

