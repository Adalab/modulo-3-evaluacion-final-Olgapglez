import CharacterCard from "./CharacterCard";

const CharacterList = ({ listCharacter }) => {

    const dataHtml = listCharacter.map((eachCharacter) => {
        return <CharacterCard eachCharacter={eachCharacter} key={eachCharacter.id} />
    });

    return (

        <section className="list">
            <ul className="cards">
                {dataHtml}
            </ul>
        </section>
    );

};

export default CharacterList;
