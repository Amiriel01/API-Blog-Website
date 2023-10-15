import React from "react";
import { useLocation } from 'react-router-dom'
import { useEffect } from "react";

export default function Resources() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname]);

    return(
        <p>resources</p>
        )

}
