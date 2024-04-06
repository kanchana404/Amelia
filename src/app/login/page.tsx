"use client";
import Link from "next/link"
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import img1 from "../../../public/images/1.png";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css'
import "./style.css"
import toast from "react-hot-toast";


export default function signupPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",

    })
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


    const backgroundColor = mod ? "rgb(41, 37, 36, 1)" : " rgba(241, 243, 245, 1)";
    const textColor = mod ? "rgb(248, 250, 252)" : "rgb(0, 0, 0)";
    const modebtn = mod ? "bi bi-brightness-high" : "bi bi-moon-fill"

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0 ) {
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true)
        }
    }, [user])



    const onSignup = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/login", user);
            console.log("Login successful", response.data);
            toast.success("Login successful");
            router.push("/profile");            
        } catch (error:any) {
            console.log("Login failed", error.message);
            toast.error("Login failed");
            
        }finally{
            setLoading(false);
        }
    }
    

    return (
        
        <div className="p-3 m-0 border-0 bd-example bd-example-row bd-example-row-flex-cols" style={{
            background: backgroundColor,
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
                            <button>SignUp</button>
                        </div>
                        <div className="col-6 text-start">
                            <button className="btn btn-warning">Request a Demo</button>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <section id="hero" style={{
                height: '69.1vh',
            }}>
                <div className="row text-center">
                    <div className="col-lg-4 col-md-3 col-sm-2"></div>
                    <div className="col-lg-4 col-md-6 col-sm-8" style={{
                        background: 'rgba(255, 255, 255, 0.75)',
                        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                        backdropFilter: 'blur(11px)',
                        WebkitBackdropFilter: 'blur(11px)',
                        borderRadius: '10px',
                        border: '1px solid rgba(255, 255, 255, 0.18)'
                    }}>
                        <div className="container" style={{
                            padding: '20px'
                        }}>
                            <div className="col text-center">
                                <h1>Sign In</h1>
                            </div>
                            <div className="col">
                                <label htmlFor="email">Email</label>
                                <input className="form-control"
                                    type="email"
                                    id="email "
                                    value={user.email}
                                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                                    placeholder="Email" />

                            </div>
                            <br />
                            <div className="col">
                                <label htmlFor="password">Password</label>
                                <input className="form-control"
                                    type="password"
                                    id="password "
                                    value={user.password}
                                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                                    placeholder="Username" />

                            </div>
                            <br />
                            <div className="col">
                                <button className="btn btn-primary"
                                    disabled={buttonDisabled}
                                    onClick={onSignup}>{buttonDisabled ? "Fill info" : "Sign In"}</button>
                                    <br />
                                    <Link href="/signup">Visit Sign Up Page</Link>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-3 col-sm-2"></div>
                </div>
               
            </section>



        </div>
    )
} 