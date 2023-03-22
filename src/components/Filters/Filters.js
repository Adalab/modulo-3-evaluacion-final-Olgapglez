import FilterHouse from "./FilterHouse";
import FilterName from "./FilterName";



function Filters({handleFilterHouse}) {

    return (
        <section className="filters">

            <form>
            <FilterName/>
            <FilterHouse handleFilterHouse={handleFilterHouse}/>
            </form>

        </section>
    )
}

export default Filters;