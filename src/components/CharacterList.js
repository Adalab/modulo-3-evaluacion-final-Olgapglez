import CharacterCard from "./CharacterCard";

function CharacterList ({listCharacter}) {

    const dataHTML = listCharacter.map((eachCharacter) => {
        return <CharacterCard eachCharacter={eachCharacter}/>
    });

return (

    <section className="list">
        <ul className="cards">
        {dataHTML}
        </ul>
    </section>
);

}

export default CharacterList;
