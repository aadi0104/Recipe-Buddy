import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import CategoryComponent from "./CategoryComponent";
import SearchResultComponent from "./SearchResultComponent";

function ContentComponent() {

    const [searchValue, setSearchValue] = useState("");
    const [isSearched, setIsSearched] = useState(false);

    const handleSearch = (e) => {
        const search = e.target.value;
        let temp = search.slice(0, 1).toUpperCase() + search.slice(1).toLowerCase();
        setSearchValue(temp);
        if (search === "") {
            setIsSearched(false);
        }
        else {
            setIsSearched(true);
        }
    }

    return (
        <>
            <section>
                <form>
                    <div id="search">
                        <div>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                            <input onChange={(e) => { handleSearch(e); }} type="search" placeholder="Search your Dish here!" />
                        </div>
                    </div>
                </form>
            </section>
            {
                isSearched ? <SearchResultComponent searchValue={searchValue} /> : <CategoryComponent />
            }
        </>
    );
}

export default ContentComponent;