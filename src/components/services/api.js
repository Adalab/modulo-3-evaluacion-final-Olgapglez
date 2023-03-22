const getDataApi  = () => {
return fetch('https://hp-api.onrender.com/api/characters')
    .then((response) => response.json())
    .then((data) => {
        const selectData = data.map((eachCharacter) => {
            return {
                image: eachCharacter.image,
                name: eachCharacter.name,
                species: eachCharacter.species,
                id: eachCharacter.id,
            };
        });
        return selectData;
    });
};

export default getDataApi;