import React, { Component } from "react";
import { useForm } from 'react-hook-form';

function AppRegister() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        localStorage.setItem(data.email, JSON.stringify({
            name: data.name, password: data.password
        }));
         console.log(JSON.parse(localStorage.getItem(data.email)));
    }

    return (
        <div>
            <form className='App' onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("name", {required: true}) }/>
                {errors.name && <span style={{color: "red"}}>Name is required</span>}
                <input type="email" {...register("email", {required: true})} />
                {errors.email && <span style={{color: "red"}}>Email Address is required</span>}
                <input type="password" {...register("password", {required: true}) }/>
                {errors.password && <span style={{color: "red"}}>Password is required</span>}
                <input type={"submit"} value={"Register New Account"}/>
            </form>
        </div>
    )
}

export default class Registration extends Component {
    render() {
        return (
            <div>
                <br />
                <h2>Registration Form</h2>
                <p>Please register for a new account</p>
                <AppRegister />
            </div>
        )
    }
}