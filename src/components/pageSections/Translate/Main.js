import InputTextField from "../../elements/Inputs/InputTextField";
import SwapButton from "./SwapButton";

/**
 * 
 * @param {inputsParams, onclick} params 
 * 
 */

const Main = (params) => {
    return <>
        <InputTextField params={params.inputsParams[0]} />
        <SwapButton onClick={params.onclick} />
        <InputTextField params={params.inputsParams[1]} />
    </>;
}

export default Main;