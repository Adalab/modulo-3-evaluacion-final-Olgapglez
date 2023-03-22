const getDataApi  = () => {
return fetch('https://hp-api.onrender.com/api/characters/house/gryffindor')
    .then((response) => response.json())
    .then((data) => {
        const selectData = data.map((eachCharacter) => {
            return {
                image: eachCharacter.image,
                name: eachCharacter.name,
                species: eachCharacter.species,
            };
        });
        return selectData;
    });
};

export default getDataApi;