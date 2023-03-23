function FilterName({ handleSearch, search }) {

    const handleChangeName = (ev) => {
        handleSearch(ev.target.value);
    };

    return (
        <>
            <label className="form-label" htmlFor="name">
                Busca por por personaje:
            </label>
            <input
                className="form-input"
                onChange={handleChangeName}
                type="text"
                name="name"
                id="name"
                value={search}
            ></input>
        </>

    )
}

export default FilterName;