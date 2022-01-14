import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Protected(props) {

    let Cmp = props.cmp;
    const navigate = useNavigate();

    useEffect(() => {

     

        if (!localStorage.getItem("user-info")) {
            navigate("/dashboard/login")
        }

        // const userInfo = JSON.parse(localStorage.getItem("user-info"));
        // console.log("userInfo:" + userInfo['is_emailconfirmed']);
        // if (userInfo['is_emailconfirmed'] == "0") {
        //     navigate("/dashboard/login")
        // }
        console.log((window.location.href).includes("list") ? "TRUE" : "FALSE");
        
        
    });

    return (
        <div>
            <Cmp />
        </div>
    )
}

export default Protected
