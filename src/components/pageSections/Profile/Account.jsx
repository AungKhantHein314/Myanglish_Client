import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import UserDetail from "./UserDetails";

const Account = () => {
    const navigate = useNavigate();
    const [verified, setVerify] = useState(true);

    const user = useSelector(state => state.user);

    useEffect(() => {
        if(user.message === "User not verified.") {
            navigate("/verify/notice")
        }
     }, [user])

    return (
        <div>
            <UserDetail />
        </div>
    )
}

export default Account