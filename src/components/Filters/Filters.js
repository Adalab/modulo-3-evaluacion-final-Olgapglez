import FilterHouse from "./FilterHouse";
import FilterName from "./FilterName";



function Filters({ handleFilterHouse, /*handleFilterName*/ }) {

    return (
        <section className="filters">

            <form className="form">
                <FilterName /*handleFilterName={handleFilterName}*/ />
                <FilterHouse handleFilterHouse={handleFilterHouse} />
            </form>

        </section>
    )
}

export default Filters;