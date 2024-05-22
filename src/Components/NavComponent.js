import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBurger } from "@fortawesome/free-solid-svg-icons";


function NavComponent() {
    return (
        <nav>
            <p>
                <span>
                    <FontAwesomeIcon icon={faBurger} />
                </span>
                Recipe-
                <span>
                    Buddy
                </span>
            </p>
        </nav>
    );
}

export default NavComponent;