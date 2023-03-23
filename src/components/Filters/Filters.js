import FilterHouse from "./FilterHouse";
import FilterName from "./FilterName";



function Filters({ handleFilterHouse, handleSearch, search }) {

    return (
        <section className="filters">

            <form className="form">
                <FilterName handleSearch={handleSearch} search={search} />
                <FilterHouse handleFilterHouse={handleFilterHouse} />
            </form>

        </section>
    )
}

export default Filters;