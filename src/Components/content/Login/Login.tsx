import React from "react";
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {TextInput} from "../Profil/ProfilForm/TextArea";
import {required} from "../../../until/validators";
import {Navigate} from "react-router-dom";
import s from "./../Profil/ProfilForm/TextArea.module.css"

export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

type LoginPropsType = {
    isAuth: boolean,
    authLogInUserInProfile: (formDate: FormDataType) => void
}

export const Login = (props: LoginPropsType) => {

    const onSubmit = (formData: FormDataType) => {
        props.authLogInUserInProfile(formData)
    }
    if(props.isAuth){
        return <Navigate to = {"/profil"}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginFormContener onSubmit={onSubmit}/>
    </div>
}


export const LoginForm = (props: InjectedFormProps<FormDataType>) => {
    return <form onSubmit={props.handleSubmit}>
        {props.error && <div className={s.error_form_all}>
            {props.error}
        </div>}
        <div>
            <Field
                validate={[required]}
                component={TextInput}
                name={'login'}
                placeholder={"email"}/>
        </div>
        <div>
            <Field
                validate={[required]}
                type={"password"}
                component={TextInput}
                name={'password'}
                placeholder={"password"}/>
        </div>
        <div>
            <Field
                component={"input"}
                name={'rememberMe'}
                type={"checkbox"}/>
        </div>
        <div>
            <button>Login</button>
        </div>

    </form>
}


const LoginFormContener = reduxForm<FormDataType>({
    form: "login"
})(LoginForm)