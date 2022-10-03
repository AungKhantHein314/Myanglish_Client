import React, { useEffect } from 'react';
import ModalBox from '../../components/elements/Modal/ModalBox';
import CircularIndeterminate from '../../components/elements/Progress/CircularIndeterminate';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();
    const [loggingOut, setLoggingOut] = React.useState(true);

    useEffect(() => {
        localStorage.removeItem("token");
        navigate("/")
    }, [0])

    return (<>
        {loggingOut && <ModalBox BoxColor="#4dd2ff" Text={<CircularIndeterminate text=" Logging Out..."/>}></ModalBox>}
    </>);
}

export default Logout;