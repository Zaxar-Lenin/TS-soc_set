import React from "react";
import s from "./TextArea.module.css"


export const TextArea = ({input, meta, ...props}: any) => {
    const hasError = meta.touched && meta.error

    return <div >
        <textarea className={`${s.text} ${ hasError ? s.text_error : ""}`} {...input} {...props}/><br/>
        {hasError && <span className={s.error}>{meta.error}</span>}
    </div>
}

export const TextInput = ({input, meta, ...props}: any) => {
    const hasError = meta.touched && meta.error
    return <div >
        <input className={`${s.text_input} ${ hasError ? s.text_error : ""}`} {...input} {...props}/><br/>
        {hasError && <span className={s.error}>{meta.error}</span>}
    </div>
}

