import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPizzaSlice } from "@fortawesome/free-solid-svg-icons";

function HeaderComponent() {
    return (
        <header>
            <h1>
                Hello, <span>Foodies!</span>
            </h1>
            <h2>
                Cook your own food <span><FontAwesomeIcon icon={faPizzaSlice} /></span>
            </h2>
            <h3>
                With the taste of your <span>Choice!</span>
            </h3>
        </header>
    );
}

export default HeaderComponent;