import Notice from "../../components/pageSections/Verify/Notice";
import { useLocation } from "react-router-dom";
import VerifyProcess from "../../components/pageSections/Verify/VerifyProcess";

const Verify = () => {
    const location = useLocation();

    return <>
        {location.pathname === "/verify/notice" ? <Notice /> : <VerifyProcess />}
        
    </>;
}


export default Verify;