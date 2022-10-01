import React, { useState, useEffect } from 'react';
import LabelBottomNavigation from '../components/pageSections/Translate/LabelBottomNavigation';
import Main from '../components/pageSections/Translate/Main';

const Translate = () => {
    const [change, setChange] = useState(false);
    const [inputsParams, setInputsParams] = useState([{ isDisabled: false, defaultValue: "မြန်းဂလိရှ်", label: "Myanmar Text", rows: 8 },
    { isDisabled: true, defaultValue: "Myanglish", label: "Myanglish Text", rows: 8 }])

    function handleSwap() {
        setChange(true);
        const newInputsParams = inputsParams.reverse();
        newInputsParams[0].isDisabled = false;
        newInputsParams[1].isDisabled = true;
        setInputsParams(newInputsParams);
    }

    useEffect(() => {
        setTimeout(() => {
            setChange(false)
        }, 1);
    }, [change])

    return (
        <div>
            <br />
            {!change && <Main onClick={handleSwap} inputsParams={inputsParams}/>}
            <LabelBottomNavigation />
        </div>
    );
}

export default Translate;