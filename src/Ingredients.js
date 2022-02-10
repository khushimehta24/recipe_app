import React from 'react';
import { useLocation } from 'react-router-dom';

function Ingredients(props) {
    const location = useLocation();
    console.log(location);
    return <>
        hello
    </>;
}

export default Ingredients;
