function FilterHouse({ handleFilterHouse }) {

    const handleChangeHouse = (ev) => {
        handleFilterHouse(ev.target.value);
    };


    return (
        <>
            <label className="form-label" htmlFor="house">
                Selecciona la casa:
            </label>
            <select className="form-text"
                name='house'
                id='house'
                // defaultValue={} ¿Cómo funciona??
                onChange={handleChangeHouse}>
                <option value='Gryffindor'>Gryffindor</option>
                <option value='Hufflepuff'>Hufflepuff</option>
                <option value='Ravenclaw'>Ravenclaw</option>
                <option value='Slytherin'>Slytherin</option>
                <option value='all'>Todas</option>
            </select>
        </>

    )
}

export default FilterHouse;