import InputTextField from "../../elements/Inputs/InputTextField";
import SwapButton from "./SwapButton";

const Main = (params) => {
    return <>
        <InputTextField params={params.inputsParams[0]} />
        <SwapButton onClick={params.onClick} />
        <InputTextField params={params.inputsParams[1]} />
    </>;
}

export default Main;