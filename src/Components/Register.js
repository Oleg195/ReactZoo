import React, { useState } from 'react'
import './Register.css'
import { Link, useHistory } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'



function Register(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const auth = getAuth()
    const history = useHistory()
    const handleSignUp = (e) => {

        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((e) => {
                props.showRegSuccess("flex")

                setTimeout(() => {
                    props.showRegSuccess("none")


                    history.push("/login");
                }, 2000)

            })
            .catch((error) => {
                if (error.code === "auth/email-already-in-use") {
                    props.regErrMessage("Эта учетная запись не доступна!")
                } else if (error.code === "auth/invalid-email") {
                    props.regErrMessage("Электронная почта неверна!")

                } else if (error.code === "auth/weak-password") {
                    props.regErrMessage("Ваш пароль короче 6 символов!")

                }
                // props.regErrMessage()
                props.showRegError("flex")
                setTimeout(() => {
                    props.showRegError("none")

                }, 4000)
            })

    }

    const redirectLogin = () => {
        history.push("/login");

    }


    return (
        <div className="register animate__animated animate__fadeInDownBig animate__delay-0.7s">
            <div className="register-body">
                <div className="register-content">
                    <div className="register-caption">
                    Регистрация
                    </div>
                    <hr></hr>
                    <div className="register-form">
                        <div className="email">
                            <input type="email" name="email" id="email" placeholder="Email" autoComplete="off" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="password">
                            <input type="password" name="password" id="password" placeholder="Пароль" autoComplete="off" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="register-footer">
                            <div className="register-login">


                            </div>

                            <div className="register-submit">

                                <button onClick={redirectLogin}><i className="fas fa-undo" style={{marginRight:"10px"}}></i>Назад</button>
                                <button onClick={handleSignUp}><i className="fas fa-check" style={{marginRight:"10px"}}></i>Завершить</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )

};

export default Register