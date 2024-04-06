"use client"

import "./style.css"
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css'
import { useRouter } from "next/navigation";
import React from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function ProfilePage(){
    const [mod, setMode] = React.useState(false)
    const [buttonDisabled, setButtonDisabled] = React.useState(false)
    const [loading, setLoading] = React.useState(false);
    const mode = async () => {
        try {
            setMode((prevMode) => !prevMode);

        } catch (error: any) {
            console.log("Mode Error", error.message);
        }
    }
 const router = useRouter()
const signout = async () =>{
    try {
        await axios.get("/api/users/logout")
        toast.success("User logged out successfully");
        router.push("/login")
    } catch (error:any) {
        console.log(error.message);
        toast.error(error.message);
        
    }
}

    const backgroundColor = mod ? "rgb(41, 37, 36, 1)" : " rgba(241, 243, 245, 1)";
    const textColor = mod ? "rgb(248, 250, 252)" : "rgb(0, 0, 0)";
    const modebtn = mod ? "bi bi-brightness-high" : "bi bi-moon-fill"
    return(
        <div className="p-3 m-0 border-0 bd-example bd-example-row bd-example-row-flex-cols" style={{
            background: backgroundColor,
            height: "100vh"
        }}>
            <div className="row mt-3" style={{
                color: textColor
            }}>
                <div className="col-lg-2 col-md-5 col-sm-12">
                    <div className="col text-center ">
                        <h4><b>Amelia</b></h4>
                    </div>
                </div>
                <div className="col-lg-5 col-md-1 col-sm-12"></div>
                <div className="col-lg-5 col-md-6 col-sm-12 text-start">
                    <div className="row">
                        <div className="col-2 text-end mt-2">
                            <button onClick={mode}><i className={modebtn}></i></button>
                        </div>
                        <div className="col-4 text-center mt-2">
                            <button>Profile</button>
                        </div>
                        <div className="col-6 text-start">
                            <button className="btn btn-warning" onClick={signout}>Signout</button>
                        </div>
                    </div>
                </div>
            </div>
          



        </div>
    )
}