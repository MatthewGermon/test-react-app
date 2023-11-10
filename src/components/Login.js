import React, { Component } from "react";
import { useForm } from 'react-hook-form';

function AppLogin() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const userData = JSON.parse(localStorage.getItem(data.email));
        if (userData) {
            if (userData.password === data.password) {
                console.log("Welcome " + userData.name + ".");
            } else {
                console.log("Password or Email don't match.");
            }
        } else {
            console.log("Password or Email don't match.");
        }
    };
    return (
        <div>
            <form className="App" onSubmit={handleSubmit(onSubmit)}>
                <input type="email" {...register("email", {required: true})} />
                {errors.email && <span style={{color: "red"}}>Please enter your email</span>}
                <input type="password" {...register("password")} />
                <input type={"submit"} value={"Login"}/>
            </form>
        </div>
    )
}

export default class Login extends Component {
    render() {
        return (
            <div>
                <br />
                <h2>Login</h2>
                <AppLogin />
            </div>
        )
    }
}