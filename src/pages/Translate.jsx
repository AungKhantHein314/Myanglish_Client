import React, { useState, useEffect } from 'react';
import LabelBottomNavigation from '../components/pageSections/Translate/LabelBottomNavigation';
import Main from '../components/pageSections/Translate/Main';
import Button from '../components/elements/Buttons/Button';
import { useDispatch, useSelector } from "react-redux";
import { translateMyanmarToMyanglish } from '../redux/features/translateSlice';
import ModalBox from '../components/elements/Modal/ModalBox';
import CircularIndeterminate from '../components/elements/Progress/CircularIndeterminate';

const Translate = () => {
    const dispatch = useDispatch();

    const [change, setChange] = useState(false);
    const [prevent, setPrevent] = useState(false);
    const [translating, setTranslating] = useState(false);
    const [inputsParams, setInputsParams] = useState([{ isDisabled: false, defaultValue: "မြန်းဂလိရှ်", label: "Myanmar Text", rows: 8, value: '' },
    { isDisabled: true, defaultValue: "Myanglish", label: "Myanglish Text", rows: 8, value: '' }])

    function handleSwap(e) {
        e.preventDefault();
        setPrevent(true);

        // const newInputsParams = inputsParams.reverse();
        // newInputsParams[0].isDisabled = false;
        // newInputsParams[1].isDisabled = true;
        // setInputsParams(newInputsParams);
    }

    useEffect(() => {
        setTimeout(() => {
            setChange(false)
        }, 1);
    }, [change])

    const userId = useSelector(state => state.user._id);

    function handleTranslate(e) {
        e.preventDefault();
        setTranslating(true);
        let newInputsParams = inputsParams;
        dispatch(translateMyanmarToMyanglish({
            myanmarText: inputsParams[0].value,
            userId
        })).then(data => {
            newInputsParams[1].defaultValue = data.payload.myanglishText;
            newInputsParams[0].defaultValue = inputsParams[0].value;
            setInputsParams(newInputsParams);
            setChange(true);
            setTranslating(false);
        })
    }

    return (
        <div>
            <br />
            {/* <Main onClick={handleSwap} inputsParams={inputsParams}/> */}
            {!change && <Main onclick={handleSwap} inputsParams={inputsParams}/>}
            {prevent && <ModalBox BoxColor="skyblue" Text="Translation from myanglish to myanmar service is not fully developed. We will notify once the service is available" TextToLink="OK" Link="/translate"/>}
            <Button width="50%" bgcolor="skyblue" varient="contained" size="16" onclick={handleTranslate}> Translate </Button>
            <LabelBottomNavigation />
            {translating && <ModalBox Text={<CircularIndeterminate text="Translating..."/>}></ModalBox>}
        </div>
    );
}

export default Translate;