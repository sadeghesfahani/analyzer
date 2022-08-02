import React from 'react';
import {useDispatch, useSelector} from "react-redux";
function UseSection(props) {
    const sections = useSelector(state=> state.sections)
    return {sections}
}

export default UseSection;