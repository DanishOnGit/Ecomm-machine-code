import { ProductListingPage } from "../components/ProductListingPage"
import { SortAndFilter } from "../components/SortAndFilter"


export const Home=()=>{
    return(
        <div>
            <SortAndFilter/>
            <ProductListingPage/>
        </div>
    )
}